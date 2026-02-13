// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DraftStack',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pat-baseten/draftstack-docs' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Quickstart', slug: 'getting-started/quickstart' },
						{ label: 'How it works', slug: 'getting-started/how-it-works' },
					],
				},
				{
					label: 'Core concepts',
					items: [
						{ label: 'Knowledge sync pipeline', slug: 'concepts/knowledge-sync-pipeline' },
						{ label: 'Suggestions and inbox', slug: 'concepts/suggestions-and-inbox' },
						{ label: 'Knowledge sources', slug: 'concepts/knowledge-sources' },
						{ label: 'Organizations and teams', slug: 'concepts/organizations-and-teams' },
					],
				},
				{
					label: 'Integrations',
					items: [
						{ label: 'GitHub', slug: 'integrations/github' },
						{ label: 'Notion', slug: 'integrations/notion' },
						{ label: 'Linear', slug: 'integrations/linear' },
						{ label: 'Slack', slug: 'integrations/slack' },
						{ label: 'Custom style guides', slug: 'integrations/style-guides' },
					],
				},
				{
					label: 'Dashboard',
					items: [
						{ label: 'Inbox', slug: 'dashboard/inbox' },
						{ label: 'Activity log', slug: 'dashboard/activity-log' },
						{ label: 'Team management', slug: 'dashboard/team-management' },
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
