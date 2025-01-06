import services from '../../lib/services.json'

export const prerender = true;
export const ssr = true;
export const csr = true;

export const load = async ({  }) => {

	return {
		services: services,
		title: "Service",
		description: "Fugit quasi ullam reiciendis totam culpa.",
	};
};
