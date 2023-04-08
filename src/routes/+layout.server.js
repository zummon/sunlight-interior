export const load = async ({}) => {
	const model = await import(`../lib/model.json`).then((xp) => xp.default);
	let services = await import(`../lib/services.json`).then((xp) => xp.default);

	return {
		services: services.map((service) => ({ ...model, ...service })),
	};
};
