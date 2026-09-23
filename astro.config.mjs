// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Creato Display',
			cssVariable: '--font-creato-display',
			options: {
				variants: [
					{
						weight: 100,
						style: 'normal',
						src: ['./src/assets/fonts/creato-display/CreatoDisplay-Thin.woff2'],
					},
					{
						weight: 300,
						style: 'normal',
						src: ['./src/assets/fonts/creato-display/CreatoDisplay-Light.woff2'],
					},
					{
						weight: 400,
						style: 'normal',
						src: ['./src/assets/fonts/creato-display/CreatoDisplay-Regular.woff2'],
					},
					{
						weight: 500,
						style: 'normal',
						src: ['./src/assets/fonts/creato-display/CreatoDisplay-Medium.woff2'],
					},
					{
						weight: 700,
						style: 'normal',
						src: ['./src/assets/fonts/creato-display/CreatoDisplay-Bold.woff2'],
					},
					{
						weight: 800,
						style: 'normal',
						src: ['./src/assets/fonts/creato-display/CreatoDisplay-ExtraBold.woff2'],
					},
					{
						weight: 900,
						style: 'normal',
						src: ['./src/assets/fonts/creato-display/CreatoDisplay-Black.woff2'],
					},
				],
			},
		},
	],
});
