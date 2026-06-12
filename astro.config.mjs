// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://pat-baseten.github.io',
  base: '/draftstack-docs',
  integrations: [
    starlight({
      title: 'DraftStack',
      favicon: '/favicon.svg',
      head: [
        { tag: 'meta', attrs: { name: 'theme-color', content: '#16a37f' } },
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pat-baseten/draftstack-docs' }],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
      {
            "label": "Getting started",
            "items": [
                  {
                        "label": "Introduction",
                        "slug": "getting-started/introduction"
                  },
                  {
                        "label": "Installation",
                        "slug": "getting-started/installation"
                  },
                  {
                        "label": "Quickstart",
                        "slug": "getting-started/quickstart"
                  },
                  {
                        "label": "How DraftStack works",
                        "slug": "getting-started/how-it-works"
                  }
            ]
      },
      {
            "label": "Core concepts",
            "items": [
                  {
                        "label": "Projects",
                        "slug": "concepts/projects"
                  },
                  {
                        "label": "Suggestions",
                        "slug": "concepts/suggestions"
                  },
                  {
                        "label": "Style guides",
                        "slug": "concepts/style-guides"
                  },
                  {
                        "label": "CLI and MCP",
                        "slug": "concepts/cli-and-mcp"
                  },
                  {
                        "label": "Scheduled audits",
                        "slug": "concepts/scheduled-audits"
                  },
                  {
                        "label": "Page anchors",
                        "slug": "concepts/page-anchors"
                  },
                  {
                        "label": "Security",
                        "slug": "concepts/security"
                  }
            ]
      },
      {
            "label": "Integrations",
            "items": [
                  {
                        "label": "GitHub App",
                        "slug": "integrations/github-app"
                  },
                  {
                        "label": "Slack notifications",
                        "slug": "integrations/slack-notifications"
                  }
            ]
      },
      {
            "label": "Reference",
            "items": [
                  {
                        "label": "CLI reference",
                        "slug": "reference/cli"
                  },
                  {
                        "label": "API reference",
                        "slug": "reference/api"
                  },
                  {
                        "label": "Configuration",
                        "slug": "reference/configuration"
                  },
                  {
                        "label": "Troubleshooting",
                        "slug": "reference/troubleshooting"
                  },
                  {
                        "label": "Deployment",
                        "slug": "reference/deployment"
                  },
                  {
                        "label": "Style guide",
                        "slug": "reference/style-guide"
                  },
                  {
                        "label": "FAQ",
                        "slug": "reference/faq"
                  }
            ]
      }
],
    }),
  ],
});
