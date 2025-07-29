// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { remarkGitHubAlerts } from 'remark-github-markdown-alerts'

// https://astro.build/config
export default defineConfig({
	site: 'https://fasguy.net',
	integrations: [mdx(), sitemap()],
	redirects: {
		"/": "/posts",
		"/404": "/",
		"/post": "/posts"
	},
	markdown: {
		remarkPlugins: [remarkGitHubAlerts]
	}
});
