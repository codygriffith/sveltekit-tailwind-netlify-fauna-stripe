import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		prerender: {
			concurrency: 1,
			crawl: true,
			default: false,
			enabled: true,
			entries: ['*'],
			onError: 'fail'
		  },
	}
};

export default config;
