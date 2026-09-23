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

export const ABOUT_HERO_KICKER = 'About us';
export const ABOUT_HERO_TITLE = {
	lead: 'We are',
	main: 'Craift©',
} as const;
export const ABOUT_HERO_DESCRIPTION = 'We build distinctive brands with purpose.';

export const JOURNEY_IMAGES = HERO_TRAIL_IMAGES.slice(0, 4);

export const JOURNEY_LEAD =
	'The studio grew from a small practice into a focused brand team. Each brief still starts with purpose, then shape, then the system that holds it.';

export const JOURNEY_HEADLINE = {
	lead: 'Craift Studio© is an independent brand practice, shaping distinctive identities for ',
	muted: 'ambitious companies around the world.',
} as const;

export const JOURNEY_NOTE =
	'The journey covers identity, product, campaigns, and the systems that keep them consistent. We believe purpose must drive the work.';

export const WORK_PROCESS_TITLE = {
	lead: 'Work',
	main: 'Process',
} as const;

export const WORK_PROCESS_NOTE =
	'A clear path from the first conversation to a finished system. We move through discovery, strategy, and creation so the brand stays useful, distinctive, and ready to grow.';

export const WORK_PROCESS_STEPS = [
	{
		label: 'Discovery',
		index: '01',
		text: 'We start by learning the brief, the audience, and the goal. Research and conversation uncover the foundations that guide the identity.',
	},
	{
		label: 'Strategy',
		index: '02',
		text: 'From those findings we shape positioning, language, and direction. The strategy gives the brand a clear way to speak and grow.',
	},
	{
		label: 'Creation',
		index: '03',
		text: 'Then we turn strategy into a distinctive visual system. Marks, type, and color that hold together across product, campaign, and culture.',
	},
] as const;

export const VALUES_TITLE = {
	lead: 'Our',
	main: 'Values',
} as const;

export const VALUES_ITEMS = [
	{
		id: 'purpose',
		title: 'Purpose',
		text: 'Every brief starts with why the brand exists. We hold that reason in view so the work stays useful, not decorative.',
	},
	{
		id: 'craft',
		title: 'Craft',
		text: 'Type, mark, and color are considered with care. Small decisions are where a system starts to feel finished.',
	},
	{
		id: 'clarity',
		title: 'Clarity',
		text: 'We cut until the idea can be said simply. Teams should be able to use the brand without asking what it means.',
	},
	{
		id: 'collaboration',
		title: 'Collaboration',
		text: 'The best work is made with the people who will live with it. We listen, decide, and keep the room moving.',
	},
	{
		id: 'consistency',
		title: 'Consistency',
		text: 'Identity has to hold across product, campaign, and space. We build rules that keep the brand readable everywhere.',
	},
	{
		id: 'curiosity',
		title: 'Curiosity',
		text: 'We keep asking until the direction is honest. Better questions lead to identities that last past the launch.',
	},
] as const;

export const TEAM_TITLE = {
	lead: 'Our',
	main: 'Team',
} as const;

export const TEAM_LINK = { href: '/contact', label: 'Get in touch' } as const;

export const TEAM_MEMBERS = [
	{
		name: 'Daniel Park',
		role: 'Creative Director',
		text: 'Guides identity and direction on every brief. Keeps the idea clear from the first sketch through launch.',
		image: '/team/01.png',
	},
	{
		name: 'Maya Collins',
		role: 'Brand Strategist',
		text: 'Turns research and conversation into positioning the studio can design from, without losing the purpose.',
		image: '/team/02.png',
	},
	{
		name: 'Luca Moretti',
		role: 'Design Lead',
		text: 'Shapes type, mark, and systems so the brand holds together across product, campaign, and space.',
		image: '/team/03.png',
	},
	{
		name: 'Elena Voss',
		role: 'Studio Producer',
		text: 'Keeps production moving with care, from reviews to the files the client ships and lives with.',
		image: '/team/04.png',
	},
] as const;

export const ABOUT_HEADLINE = {
	lead: 'Nothing here happened overnight. Every© figure below marks progress, shaped by real briefs, ',
	muted: 'real teams, and a steady push toward clearer work.',
} as const;

export const ABOUT_DESCRIPTION =
	'Craift Studio is an independent design practice. For over five years, we have helped growing companies refine brand, product, and the systems that connect them.';

export const ABOUT_LINK = { href: '/about', label: 'Learn more about us' } as const;

export const ABOUT_STATS = [
	{ label: 'Since', value: '2020' },
	{ label: 'Projects', value: '150+' },
	{ label: 'Awards', value: '25+' },
] as const;

export const WORKS_TITLE = {
	lead: 'Selected',
	main: 'Works©',
} as const;

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

export const TESTIMONIALS_TITLE = {
	lead: 'Client',
	main: 'Voices',
} as const;

export const CTA_TITLE = {
	lead: "Let's Work",
	main: 'Together',
} as const;

export const CTA_LINK = { href: '/contact', label: 'Get in touch' } as const;

export const PRICING_TITLE = {
	lead: 'Pricing',
	main: 'Plans',
} as const;

export const PRICING_PROOF = {
	value: '98%',
	label: 'Client Satisfaction',
} as const;

export const PRICING_CTA = { href: '/contact', label: 'Get Started' } as const;

export const PRICING_ASK = {
	prompt: 'Still got questions?',
	link: { href: '/contact', label: 'Contact us' },
} as const;

export const PRICING_PLANS = [
	{
		name: 'Core',
		badge: 'Identity',
		price: '$3,500',
		unit: '/project',
		description:
			'A focused brand identity plan for teams that need a clear mark, type, and color system with an efficient process.',
		features: [
			{ label: 'Strategy', detail: 'workshop and positioning' },
			{ label: 'Identity', detail: 'mark, type, and color' },
			{ label: 'Guidelines', detail: 'core usage rules' },
			{ label: 'Delivery', detail: 'source files and exports' },
			{ label: 'Support', detail: 'two weeks of follow-up' },
		],
	},
	{
		name: 'Signature',
		badge: 'Complete',
		price: '$8,500',
		unit: '/project',
		description:
			'A complete brand system for companies that need identity, language, and a clear way to extend the work across product and campaigns.',
		features: [
			{ label: 'Strategy', detail: 'brand platform and narrative' },
			{ label: 'Identity', detail: 'full visual system' },
			{ label: 'Verbal', detail: 'naming cues and voice' },
			{ label: 'Digital', detail: 'site and product cues' },
			{ label: 'Support', detail: 'launch and handover' },
		],
	},
] as const;

export const PRICING_FAQS = [
	{
		question: 'What types of projects do you take?',
		answer:
			'We take brand identity, product design, campaigns, and spatial work. Each brief is scoped so the plan matches the actual need, not a generic package.',
	},
	{
		question: 'How long does a typical project take?',
		answer:
			'The Core plan usually takes six to eight weeks. A Signature system takes ten to fourteen, depending on feedback rounds and how quickly the team can review.',
	},
	{
		question: 'Do you handle the entire brand process?',
		answer:
			'Yes. Strategy, identity, guidelines, and handover sit in one studio. We can lead the full process or work alongside an in-house team when that is a better fit.',
	},
	{
		question: 'Can you help with naming and voice?',
		answer:
			'Yes. Verbal identity can be included in the Signature plan, or scoped as a focused piece of work if you already have a visual system in place.',
	},
] as const;

export const TESTIMONIALS_PROOF = '4.9/5.0 from 50+ clients';

export const TESTIMONIALS_ITEMS = [
	{
		quote:
			'What a team. Supportive, precise, and easy to work with. The identity they built is considered in every detail, yet simple enough for our team to use every day. We finally have a system we can grow with.',
		name: 'Elena Hart',
		role: 'Brand Identity',
		company: 'Northline',
		location: 'Lisbon',
		image: '/testimonials/01.png',
	},
	{
		quote:
			'They treated the product as part of the brand, not an afterthought. Type, screens, and tone sit together with quiet control. The launch felt finished, and the team still has a clear way to extend the work.',
		name: 'James Hale',
		role: 'Product Design',
		company: 'Harbor Studio',
		location: 'London',
		image: '/testimonials/02.png',
	},
	{
		quote:
			'Professional, warm, and sharp in the room. They listened first, then made decisions we could stand behind. The campaign held together across print, film, and social without losing the idea at the center.',
		name: 'Sofia Reyes',
		role: 'Campaign Direction',
		company: 'Atelier Group',
		location: 'Mexico City',
		image: '/testimonials/03.png',
	},
	{
		quote:
			'We needed a studio that could hold strategy and craft at once. That is what we got. The brand now reads clearly in the product, the site, and the way the team talks about the work.',
		name: 'Daniel Brooks',
		role: 'Spatial Form',
		company: 'Field & Form',
		location: 'New York',
		image: '/testimonials/04.png',
	},
] as const;

export const SERVICES_LINK = { href: '/contact', label: 'Get in touch' } as const;

export const SERVICES_ITEMS = [
	{
		title: 'Brand Identity',
		description:
			'Marks, type, color, and the rules that keep them consistent. We build identity systems teams can use from the first pitch through every later release.',
		image: '/services/01.png',
	},
	{
		title: 'Product Design',
		description:
			'Interfaces, flows, and the quiet details that make a product feel considered. Screens stay on-brand without getting in the way of the work.',
		image: '/services/02.png',
	},
	{
		title: 'Spatial Form',
		description:
			'Environments, installations, and physical touchpoints that carry the same clarity as the digital work. Space becomes another place the brand can be read.',
		image: '/services/03.png',
	},
	{
		title: 'Campaign Direction',
		description:
			'Campaigns with a clear idea and a controlled visual system across print, film, and social. One story, adapted with care for each channel.',
		image: '/services/04.png',
	},
	{
		title: 'Verbal Identity',
		description:
			'Naming, voice, and the words that sit beside the mark. We write language that sounds like the company it belongs to, then keep it usable.',
		image: '/services/05.png',
	},
] as const;

export const SERVICES_PAGE_ITEMS = [
	...SERVICES_ITEMS,
	{
		title: 'Motion Design',
		description:
			'Moving image, 3D form, and the paced sequences that give a brand rhythm. We build motion systems that stay considered in film, product, and campaign work.',
		image: '/services/06.png',
	},
] as const;

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
	{ href: '/about', label: 'Studio' },
	{ href: '/projects', label: 'Projects' },
] as const;

export const NAV_LINKS_RIGHT = [
	{ href: '/services', label: 'Services' },
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
