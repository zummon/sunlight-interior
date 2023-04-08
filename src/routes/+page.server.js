export const prerender = true;

export const load = async ({ parent }) => {
	let data = await parent();

	return {
		services: data.services.slice(0, 3),
		title: "Sunlight Interior",
		description: "Sapiente qui, enim quidem, aut corporis",
	};
};
