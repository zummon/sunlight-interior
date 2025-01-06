import services from '../lib/services.json'

export const prerender = true;
export const ssr = true;
export const csr = true;

export const load = async ({  }) => {

	return {
		services: services.filter((item) => item.featured),
		title: "Sunlight Interior",
		description: "Sapiente qui, enim quidem, aut corporis",
	};
};
