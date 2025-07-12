import services from "../../lib/services.json";

export function load() {
	let tags = new Set();

	services.forEach((service) => {
		service.tags.forEach((tag) => {
			tags.add(tag);
		});
	});
	
	return {
		services,
		title: "Service",
		description: "Fugit quasi ullam reiciendis totam culpa.",
		tags: [...tags],
	}
}