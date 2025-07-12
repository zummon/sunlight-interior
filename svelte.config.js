import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		output: {
			bundleStrategy: 'single',
		},
		paths: {
			relative: false,
		},
	}
};

export default config;
