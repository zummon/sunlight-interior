<script>
	import services from "../lib/services.json";
	import Carousel from "../lib/Carousel.svelte";
	// import Meta from "../lib/Meta.svelte";

	let data = {
		title: "Sunlight Interior",
		description: "Sapiente qui, enim quidem, aut corporis",
	};
</script>

<!-- <Meta {data}></Meta> -->

<div class="p-10 text-center w-full flex-none">
	<div class="flex flex-wrap items-baseline justify-center mb-10">
		<h1 class="text-4xl lg:text-5xl xl:text-6xl">{data.title}</h1>
		<span class="">—architect</span>
	</div>
	<p class="text-2xl">{data.description}</p>
</div>

<Carousel services={services.filter((service) => service.featured)}></Carousel>

<div class="flex items-center" id="about">
	<div class="w-5/6 sm:w-3/4 lg:w-1/2 flex-none p-4">
		<div class="flex flex-wrap items-baseline mb-10">
			<h2 class="text-4xl lg:text-5xl xl:text-6xl">About</h2>
			<span class="">—me</span>
		</div>
		<p class="text-2xl">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
			repellat mollitia blanditiis nobis ratione rerum culpa nihil enim!
		</p>
	</div>
	<div
		class="w-1/6 sm:w-1/4 lg:w-1/2 flex-none shadow-md"
		style="height: 80vh;"
	>
		<img
			class="object-cover h-full w-full"
			src="https://i.imgur.com/7aMhZNV.jpg"
			alt="Living Room"
		/>
	</div>
</div>

<div class="flex items-center" id="contact">
	<div
		class="w-1/6 sm:w-1/4 lg:w-1/2 flex-none shadow-md"
		style="height: 80vh;"
	>
		<img
			class="object-cover h-full w-full"
			src="https://i.imgur.com/na4MdN3.jpeg"
			alt="Sunlight Interior"
		/>
	</div>
	<div class="w-5/6 sm:w-3/4 lg:w-1/2 flex-none p-4">
		<div class="flex flex-wrap items-baseline mb-10">
			<h2 class="text-4xl lg:text-5xl xl:text-6xl">Contact</h2>
			<span class="">—us</span>
		</div>
		<div class="">
			<label class="block mb-4">
				<span class="text-2xl block mb-2"> Your e-mail </span>
				<input
					class="block w-full p-2 border"
					placeholder="example@mail.com"
					type="email"
				/>
			</label>
			<label class="block mb-4">
				<span class="text-2xl block mb-2"> Your name </span>
				<input
					class="block w-full p-2 border"
					placeholder="Tanya"
					type="text"
				/>
			</label>
			<label class="block mb-4">
				<span class="text-2xl block mb-2"> Your message </span>
				<textarea
					class="block w-full p-2 border"
					placeholder="I have a small house. How you can help?"
					rows="5"
				></textarea>
			</label>
			<button class="px-10 py-4 bg-gray-900 text-white cursor-pointer">
				Send
			</button>
		</div>
	</div>
</div>
