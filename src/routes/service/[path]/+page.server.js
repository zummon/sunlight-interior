export const prerender = true;
export const ssr = true;
export const csr = false;

export const load = async ({ parent, params }) => {
	let data = await parent();

	return {
		...data.services.find((service) => service.path == params.path),
	};
};
