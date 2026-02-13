// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Draftstack',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pat-baseten/draftstack-docs' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Quickstart', slug: 'getting-started/quickstart' },
						{ label: 'Project structure', slug: 'getting-started/project-structure' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Deploy your model', slug: 'guides/deploy-your-model' },
						{ label: 'Performance tuning', slug: 'guides/performance-tuning' },
					],
				},
				{
					label: 'API reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
