export const prerender = true;
export const ssr = true;
export const csr = true;

export const load = async ({ parent }) => {
	let data = await parent();

	return {
		services: data.services,
		title: "Service",
		description: "Fugit quasi ullam reiciendis totam culpa.",
	};
};
