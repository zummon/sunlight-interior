import services from '../lib/services.json'

export const trailingSlash = 'always';
export const prerender = true;

export const load = async ({ }) => {

	return {
		services,
	};
};
