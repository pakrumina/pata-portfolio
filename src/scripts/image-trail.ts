import gsap from 'gsap';

type TrailItem = {
	element: HTMLElement;
	maxRadiusRem: number;
	exiting?: boolean;
};

const RADIUS_REM = 1.25;
const MAX_RADIUS_RATIO = 0.25;

type ImageTrailOptions = {
	container: HTMLElement;
	layer: HTMLElement;
	images: readonly string[];
};

function remToPx(value: number) {
	const root = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
	return value * root;
}

function isMobileViewport() {
	return window.matchMedia('(max-width: 47.999rem)').matches;
}

function isCompactViewport() {
	return window.matchMedia('(max-width: 47.999rem), (pointer: coarse)').matches;
}

export function initImageTrail({ container, layer, images }: ImageTrailOptions) {
	if (images.length === 0) return () => {};

	const compact = isCompactViewport();
	const mobile = isMobileViewport();
	const minImageRem = mobile ? 5.5 : compact ? 7.5 : 10;
	const maxImageRem = mobile ? 14.25 : compact ? 16.25 : 21.25;
	const config = {
		imageLifespan: 0.6,
		mouseThreshold: compact ? 20 : 40,
		scrollThreshold: 50,
		inDuration: 0.6,
		outDuration: 0.8,
		touchImageInterval: 40,
		minMovementForImage: compact ? 3 : 5,
		minImageSize: remToPx(minImageRem),
		maxImageSize: remToPx(maxImageRem),
		baseRotation: 30,
		maxRotationFactor: 3,
		speedSmoothingFactor: 0.25,
	};

	const trail: TrailItem[] = [];
	const ctx = gsap.context(() => {}, layer);
	const rootFont = remToPx(1);

	const applyExitRadius = (el: HTMLElement, scale: number, maxRem: number) => {
		const safeScale = Math.max(scale, 0.08);
		el.style.borderRadius = `${Math.min(RADIUS_REM / safeScale, maxRem)}rem`;
	};

	let bounds = container.getBoundingClientRect();
	let mouseX = 0;
	let mouseY = 0;
	let lastMouseX = 0;
	let lastMouseY = 0;
	let prevMouseX = 0;
	let prevMouseY = 0;
	let isMoving = false;
	let isCursorInContainer = false;
	let isTouching = false;
	let lastTouchImageTime = 0;
	let lastScrollTime = 0;
	let lastMoveTime = Date.now();
	let isScrolling = false;
	let scrollTicking = false;
	let smoothedSpeed = 0;
	let maxSpeed = 0;
	let imageIndex = 0;
	let moveTimeout = 0;
	let scrollTimeout = 0;
	let running = true;

	const updateBounds = () => {
		bounds = container.getBoundingClientRect();
	};

	const isInContainer = (x: number, y: number) => {
		return x >= bounds.left && x <= bounds.right && y >= bounds.top && y <= bounds.bottom;
	};

	const hasMovedEnough = () => Math.hypot(mouseX - lastMouseX, mouseY - lastMouseY) > config.mouseThreshold;
	const hasMovedAtAll = () => Math.hypot(mouseX - prevMouseX, mouseY - prevMouseY) > config.minMovementForImage;

	const calculateSpeed = () => {
		const now = Date.now();
		const dt = now - lastMoveTime;
		if (dt <= 0) return 0;
		const dist = Math.hypot(mouseX - prevMouseX, mouseY - prevMouseY);
		const raw = dist / dt;
		if (raw > maxSpeed) maxSpeed = raw;
		const norm = Math.min(raw / (maxSpeed || 0.5), 1);
		smoothedSpeed =
			smoothedSpeed * (1 - config.speedSmoothingFactor) + norm * config.speedSmoothingFactor;
		lastMoveTime = now;
		return smoothedSpeed;
	};

	const dropItem = (item: TrailItem) => {
		const index = trail.indexOf(item);
		if (index >= 0) trail.splice(index, 1);
		item.element.remove();
	};

	const exitImage = (item: TrailItem) => {
		if (!running || item.exiting || !item.element.isConnected) return;
		item.exiting = true;
		ctx.add(() => {
			gsap.to(item.element, {
				scale: 0,
				rotation: '+=360',
				duration: config.outDuration,
				ease: 'power2.inOut',
				overwrite: 'auto',
				onUpdate() {
					applyExitRadius(
						item.element,
						Number(gsap.getProperty(item.element, 'scale')),
						item.maxRadiusRem,
					);
				},
				onComplete: () => dropItem(item),
			});
		});
	};

	const createImage = (speed = 0.5) => {
		const imageSrc = images[imageIndex];
		imageIndex = (imageIndex + 1) % images.length;
		const size = config.minImageSize + (config.maxImageSize - config.minImageSize) * speed;
		const x = mouseX - bounds.left;
		const y = mouseY - bounds.top;
		const rotFactor = 1 + speed * (config.maxRotationFactor - 1);
		const rot = (Math.random() - 0.5) * config.baseRotation * rotFactor;

		const wrap = document.createElement('div');
		wrap.className = 'trail-img';
		wrap.style.width = `${size}px`;
		wrap.style.height = `${size}px`;
		wrap.style.left = `${x}px`;
		wrap.style.top = `${y}px`;

		const img = document.createElement('img');
		img.src = imageSrc;
		img.alt = '';
		img.draggable = false;
		wrap.appendChild(img);
		layer.appendChild(wrap);

		const item: TrailItem = {
			element: wrap,
			maxRadiusRem: (size / rootFont) * MAX_RADIUS_RATIO,
		};
		trail.push(item);

		ctx.add(() => {
			gsap.set(wrap, {
				xPercent: -50,
				yPercent: -50,
				rotation: rot,
				scale: 0,
				force3D: true,
			});

			gsap.to(wrap, {
				scale: 1,
				duration: config.inDuration,
				ease: 'power2.out',
				overwrite: 'auto',
			});

			gsap.delayedCall(config.imageLifespan, () => exitImage(item));
		});
	};

	const createTrailImage = () => {
		if (!isCursorInContainer) return;
		if ((isMoving || isTouching) && hasMovedEnough() && hasMovedAtAll()) {
			lastMouseX = mouseX;
			lastMouseY = mouseY;
			createImage(calculateSpeed());
			prevMouseX = mouseX;
			prevMouseY = mouseY;
		}
	};

	const createTouchTrailImage = () => {
		if (!isCursorInContainer || !isTouching || !hasMovedAtAll()) return;
		const now = Date.now();
		if (now - lastTouchImageTime < config.touchImageInterval) return;
		lastTouchImageTime = now;
		createImage(calculateSpeed());
		prevMouseX = mouseX;
		prevMouseY = mouseY;
	};

	const createScrollTrailImage = () => {
		if (!isCursorInContainer || !isScrolling) return;
		lastMouseX += (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1);
		lastMouseY += (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1);
		createImage(0.5);
		lastMouseX = mouseX;
		lastMouseY = mouseY;
	};

	const onMouseOverOnce = (event: MouseEvent) => {
		updateBounds();
		mouseX = lastMouseX = prevMouseX = event.clientX;
		mouseY = lastMouseY = prevMouseY = event.clientY;
		isCursorInContainer = isInContainer(mouseX, mouseY);
		document.removeEventListener('mouseover', onMouseOverOnce);
	};

	const onMouseMove = (event: MouseEvent) => {
		prevMouseX = mouseX;
		prevMouseY = mouseY;
		mouseX = event.clientX;
		mouseY = event.clientY;
		isCursorInContainer = isInContainer(mouseX, mouseY);
		if (isCursorInContainer && hasMovedAtAll()) {
			isMoving = true;
			window.clearTimeout(moveTimeout);
			moveTimeout = window.setTimeout(() => {
				isMoving = false;
			}, 100);
			createTrailImage();
		}
	};

	const onTouchStart = (event: TouchEvent) => {
		const touch = event.touches[0];
		if (!touch) return;
		updateBounds();
		prevMouseX = mouseX;
		prevMouseY = mouseY;
		mouseX = touch.clientX;
		mouseY = touch.clientY;
		lastMouseX = mouseX;
		lastMouseY = mouseY;
		isCursorInContainer = true;
		isTouching = true;
		lastMoveTime = Date.now();
	};

	const onTouchMove = (event: TouchEvent) => {
		const touch = event.touches[0];
		if (!touch) return;
		const dx = Math.abs(touch.clientX - prevMouseX);
		const dy = Math.abs(touch.clientY - prevMouseY);
		prevMouseX = mouseX;
		prevMouseY = mouseY;
		mouseX = touch.clientX;
		mouseY = touch.clientY;
		isCursorInContainer = true;
		if (dy > dx) return;
		createTouchTrailImage();
	};

	const onTouchEnd = () => {
		isTouching = false;
	};

	const onDocumentTouchStart = (event: TouchEvent) => {
		const touch = event.touches[0];
		if (!touch || !isInContainer(touch.clientX, touch.clientY)) {
			isCursorInContainer = false;
			isTouching = false;
		}
	};

	const onScrollState = () => {
		updateBounds();
		isCursorInContainer = isInContainer(mouseX, mouseY);
		if (!isCursorInContainer) return;
		isScrolling = true;
		window.clearTimeout(scrollTimeout);
		scrollTimeout = window.setTimeout(() => {
			isScrolling = false;
		}, 100);
	};

	const onScrollTrail = () => {
		const now = Date.now();
		if (now - lastScrollTime < config.scrollThreshold) return;
		lastScrollTime = now;
		if (scrollTicking || !isCursorInContainer) return;
		scrollTicking = true;
		requestAnimationFrame(() => {
			if (isScrolling) createScrollTrailImage();
			scrollTicking = false;
		});
	};

	document.addEventListener('mouseover', onMouseOverOnce);
	document.addEventListener('mousemove', onMouseMove);
	container.addEventListener('touchstart', onTouchStart, { passive: true });
	container.addEventListener('touchmove', onTouchMove, { passive: true });
	container.addEventListener('touchend', onTouchEnd);
	document.addEventListener('touchstart', onDocumentTouchStart, { passive: true });
	window.addEventListener('scroll', onScrollState, { passive: true });
	window.addEventListener('scroll', onScrollTrail, { passive: true });
	window.addEventListener('resize', updateBounds);

	return () => {
		running = false;
		window.clearTimeout(moveTimeout);
		window.clearTimeout(scrollTimeout);
		document.removeEventListener('mouseover', onMouseOverOnce);
		document.removeEventListener('mousemove', onMouseMove);
		container.removeEventListener('touchstart', onTouchStart);
		container.removeEventListener('touchmove', onTouchMove);
		container.removeEventListener('touchend', onTouchEnd);
		document.removeEventListener('touchstart', onDocumentTouchStart);
		window.removeEventListener('scroll', onScrollState);
		window.removeEventListener('scroll', onScrollTrail);
		window.removeEventListener('resize', updateBounds);
		ctx.revert();
		trail.forEach((item) => item.element.remove());
		trail.length = 0;
	};
}
