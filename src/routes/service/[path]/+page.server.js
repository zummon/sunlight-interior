import services from '../../../lib/services.json'

export const prerender = true;
export const ssr = true;
export const csr = false;

export const entries = async () => {

	return services.map(service => {
		return {
			path: service.path
		}
	})
};

export const load = async ({ params }) => {

	return {
		...services.find((service) => service.path == params.path),
	};
};
