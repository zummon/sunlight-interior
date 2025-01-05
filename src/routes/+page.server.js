export const prerender = true;
export const ssr = true;
export const csr = true;

export const load = async ({ parent }) => {
	let data = await parent();

	return {
		services: data.services.filter((item) => item.featured),
		title: "Sunlight Interior",
		description: "Sapiente qui, enim quidem, aut corporis",
	};
};
