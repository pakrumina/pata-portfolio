/** Generic site config for the Craift theme demo. Use example.com only. */
export const SITE_TITLE = 'Craift';
export const SITE_DESCRIPTION = 'A minimal Astro theme for portfolios and blogs.';
export const CONTACT_EMAIL = 'hello@example.com';
export const CONTACT_PHONE = '+1 (212) 555-0148';
export const CONTACT_PHONE_HREF = 'tel:+12125550148';

export const CONTACT_KICKER = 'Contact us';
export const CONTACT_TITLE = {
	lead: 'Get in',
	main: 'Touch',
} as const;
export const CONTACT_DESCRIPTION =
	'Reach out to the studio to talk about your project and how a distinctive brand can grow with you.';

export const CONTACT_FORM_SUBMIT = 'Send message';
export const CONTACT_FORM_SUCCESS = 'Thanks. Your message looks good.';
export const CONTACT_FORM_ERROR = 'Please check the fields and try again.';
export const CONTACT_FORM_DEMO_NOTE =
	'This demo validates in the browser only. Set CONTACT_FORM_ACTION to deliver mail.';

/**
 * Form endpoint for Formspree, Getform, Web3Forms, or similar.
 * Leave empty in the demo. After purchase, paste your form URL here.
 * Example: 'https://formspree.io/f/xxxxxxxx'
 */
export const CONTACT_FORM_ACTION = '';

/** Extra hidden inputs some providers need, e.g. `{ name: 'access_key', value: 'YOUR_KEY' }`. */
export const CONTACT_FORM_HIDDEN: ReadonlyArray<{ name: string; value: string }> = [];

export const CONTACT_FIELDS = [
	{ id: 'name', name: 'name', label: 'Name', type: 'text', autocomplete: 'name', required: true },
	{
		id: 'email',
		name: 'email',
		label: 'Email Address',
		type: 'email',
		autocomplete: 'email',
		required: true,
	},
	{
		id: 'subject',
		name: 'subject',
		label: 'Subject',
		type: 'text',
		autocomplete: 'off',
		required: true,
	},
] as const;

export const CONTACT_FAQ_TITLE = {
	lead: 'Common',
	main: 'Questions',
} as const;

export const CONTACT_FAQS = [
	{
		question: 'How soon do you reply?',
		answer:
			'We usually reply within two business days. If the brief is urgent, say so in the subject and we will confirm a time to talk.',
	},
	{
		question: 'What should I include in my message?',
		answer:
			'Share the goal, the timeline, and any references you already have. A short note is enough to start. We will ask for more once we know the shape of the work.',
	},
	{
		question: 'Do you take on remote briefs?',
		answer:
			'Yes. Most of the work happens over shared files and scheduled calls. Location is not a barrier if the brief is clear and the team can review on time.',
	},
	{
		question: 'Can we start with a smaller piece of work?',
		answer:
			'Yes. A focused identity or a verbal pass can come first. We can grow the system later without starting the process over.',
	},
	{
		question: 'What happens after we send a message?',
		answer:
			'We read the brief, confirm it is a fit, and suggest a call. If we move forward, we send a simple scope, timeline, and the next step to begin.',
	},
] as const;

export const HERO_KICKER = 'Brand Forward';
export const HERO_TITLE = {
	lead: 'Craift',
	main: 'Studio©',
} as const;
export const HERO_DESCRIPTION = 'Crafting distinctive identities for ambitious brands';

export const HERO_TRAIL_IMAGES = [
	'/hero-trail/01.png',
	'/hero-trail/02.png',
	'/hero-trail/03.png',
	'/hero-trail/04.png',
	'/hero-trail/05.png',
	'/hero-trail/06.png',
	'/hero-trail/07.png',
	'/hero-trail/08.png',
] as const;


export const PROJECTS_TITLE = {
	lead: 'Selected',
	main: 'Works©',
} as const;

export const PROJECTS_LINK = { href: '/contact', label: "Let's Talk" } as const;

export const BLOG_TITLE = {
	lead: 'Studio',
	main: 'Notes',
} as const;

export const BLOG_DESCRIPTION =
	'Notes from the studio on briefs, identity systems, and the work that keeps a brand useful after launch.';

export const BLOG_LINK = { href: '/contact', label: "Let's Talk" } as const;

export const BLOG_READ_MORE_TITLE = {
	lead: 'Read',
	main: 'More',
} as const;

export const BLOG_ALL_POSTS = { href: '/blog', label: 'All Posts' } as const;

export const EXPLORE_NEXT_KICKER = 'Next project';

export const EXPLORE_NEXT_TITLE = {
	lead: 'Explore',
	main: 'Next',
} as const;

export const SERVICES_PAGE_TITLE = {
	lead: 'Studio',
	main: 'Services',
} as const;

export const SERVICES_PAGE_LINK = { href: '/contact', label: "Let's Talk" } as const;

export const SERVICES_TITLE = {
	lead: 'Branding',
	main: 'Solutions',
} as const;

export const CTA_TITLE = {
	lead: "Let's Work",
	main: 'Together',
} as const;

export const CTA_LINK = { href: '/contact', label: 'Get in touch' } as const;

export const WORKS_INDEX = '(2023/26)';

export const WORKS_ITEMS = [
	{
		name: 'Pulse',
		service: 'Spatial Design, 2026',
		image: '/works/01.png',
		href: '/projects/project-01',
	},
	{
		name: 'Auralis',
		service: 'Product Design, 2025',
		image: '/works/04.png',
		href: '/projects/project-04',
	},
	{
		name: 'Aperture',
		service: 'Photography, 2024',
		image: '/works/02.png',
		href: '/projects/project-02',
	},
	{
		name: 'Atelier',
		service: 'Brand Campaign, 2023',
		image: '/works/03.png',
		href: '/projects/project-03',
	},
] as const;

export const PARTNERS_LABEL = 'Global Creative Partners';

export const PARTNER_LOGOS = [
	{ src: '/partners/partner-01.svg', alt: 'Partner 01' },
	{ src: '/partners/partner-02.svg', alt: 'Partner 02' },
	{ src: '/partners/partner-03.svg', alt: 'Partner 03' },
	{ src: '/partners/partner-04.svg', alt: 'Partner 04' },
	{ src: '/partners/partner-05.svg', alt: 'Partner 05' },
	{ src: '/partners/partner-06.svg', alt: 'Partner 06' },
] as const;

export const NAV_LINKS_LEFT = [
	{ href: '/', label: 'Home' },
	{ href: '/projects', label: 'Projects' },
] as const;

export const NAV_LINKS_RIGHT = [
	{ href: '/blog', label: 'Blog' },
	{ href: '/contact', label: 'Contact' },
] as const;

export const FOOTER_HEADLINE = {
	lead: "Let's connect and create",
	main: 'something',
	muted: 'great together.',
} as const;

export const FOOTER_BRAND = 'Craift Studio';

export const FOOTER_CREDIT = 'All Rights Reserved';

export const FOOTER_META_LINKS = [{ href: '/licenses', label: 'Licenses' }] as const;

export const LICENSES_KICKER = 'Legal information';
export const LICENSES_TITLE = 'Licenses';
export const LICENSES_DESCRIPTION =
	'Credits and licenses for the images, typeface, and icons used in the Craift template.';
export const LICENSES_INTRO =
	'All visual assets, typefaces, and icons used in this template are credited below. Please review each provider’s license before using the materials in your own projects.';

export const LICENSES_SECTIONS = [
	{
		title: 'Images',
		copy: 'Some image assets in this template come from Lummi AI. Others were created with Google Flow. Please check each provider’s current terms for personal and commercial use.',
		links: [
			{ href: 'https://www.lummi.ai/license', label: 'Lummi AI' },
			{ href: 'https://labs.google/fx/tools/flow', label: 'Google Flow' },
		],
	},
	{
		title: 'Fonts',
		copy: 'The typeface used throughout the template creates its editorial visual language. Please review the license for Creato Display before redistributing it.',
		links: [{ href: 'https://befonts.com/creato-font-family.html', label: 'Creato Display' }],
	},
	{
		title: 'Icons',
		copy: 'The interface icons featured in this template come from Remix Icon. Refer to its license for usage and attribution details.',
		links: [{ href: 'https://remixicon.com/license', label: 'Remix Icon' }],
	},
] as const;

export const FOOTER_BACK_TO_TOP = 'Back to Top';

export const SOCIAL_LINKS_LEFT = [
	{ href: 'https://instagram.com', label: 'Instagram', id: 'instagram' },
	{ href: 'https://linkedin.com', label: 'LinkedIn', id: 'linkedin' },
] as const;

export const SOCIAL_LINKS_RIGHT = [
	{ href: 'https://behance.net', label: 'Behance', id: 'behance' },
	{ href: 'https://dribbble.com', label: 'Dribbble', id: 'dribbble' },
] as const;
