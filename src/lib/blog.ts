import type { CollectionEntry } from 'astro:content';

const WORDS_PER_MINUTE = 200;

export function readingMinutes(body: string) {
	const words = body.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function readingLabel(minutes: number) {
	return minutes === 1 ? '1 min read' : `${minutes} min read`;
}

function hashString(value: string) {
	let hash = 2166136261;
	for (let i = 0; i < value.length; i += 1) {
		hash ^= value.charCodeAt(i);
		hash = Math.imul(hash, 16777619);
	}
	return hash >>> 0;
}

function mulberry32(seed: number) {
	return () => {
		seed |= 0;
		seed = (seed + 0x6d2b79f5) | 0;
		let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

export function relatedPosts(
	posts: CollectionEntry<'blog'>[],
	currentId: string,
	count = 2,
) {
	const others = posts.filter((post) => post.id !== currentId);
	const random = mulberry32(hashString(currentId));
	const shuffled = [...others];

	for (let i = shuffled.length - 1; i > 0; i -= 1) {
		const j = Math.floor(random() * (i + 1));
		const current = shuffled[i];
		const swap = shuffled[j];
		if (!current || !swap) continue;
		shuffled[i] = swap;
		shuffled[j] = current;
	}

	return shuffled.slice(0, count);
}
