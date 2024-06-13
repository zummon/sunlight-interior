<script>
  let { data } = $props();
  let carousel = $state(0);
  let occur = $derived(data.services[carousel]);
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <meta name="twitter:title" content={data.title} />
  <meta name="twitter:description" content={data.description} />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
</svelte:head>

<div class="p-10 text-center w-full flex-none">
  <div class="flex flex-wrap items-baseline justify-center mb-10">
    <h1 class="text-4xl lg:text-5xl xl:text-6xl">{data.title}</h1>
    <span class="">—architect</span>
  </div>
  <p class="text-2xl">{data.description}</p>
</div>

<div
  class="bg-cover bg-center flex items-center justify-between"
  style="height: 50vh; background-image: url({data.services[carousel].image.src});"
>
  <!-- uikit icon -->
  <button
    class=""
    onclick={() => {
      if (0 < carousel) {
        carousel += -1;
      } else {
        carousel = data.services.length - 1;
      }
    }}
  >
    <svg width="40" height="40" viewBox="0 0 20 20"
      ><polyline fill="none" stroke="#fff" stroke-width="1.03" points="13 16 7 10 13 4"></polyline></svg
    >
    <span class="sr-only">chevron-left</span>
  </button>
  <button
    class=""
    onclick={() => {
      if (data.services.length - 1 > carousel) {
        carousel += 1;
      } else {
        carousel = 0;
      }
    }}
  >
    <svg width="40" height="40" viewBox="0 0 20 20"
      ><polyline fill="none" stroke="#fff" stroke-width="1.03" points="7 4 13 10 7 16"></polyline></svg
    >
    <span class="sr-only">chevron-right</span>
  </button>
</div>

<div class="flex items-center justify-center gap-3 py-2">
  {#each data.services as item, index}
    <!-- uikit icon -->
    <span class="sr-only">nuts</span>
    <button
      title={item.title}
      class={carousel == index ? "text-black" : "text-gray-300 hover:text-gray-400 focus:text-gray-400"}
      onclick={() => {
        carousel = index;
      }}
    >
      <svg class="" width="20" height="20" viewBox="0 0 20 20"
        ><polygon
          fill="none"
          stroke="currentColor"
          points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"
        /><circle fill="none" stroke="currentColor" cx="10" cy="10" r="3.5" /></svg
      >
    </button>
  {/each}
</div>

<div class="bg-white shadow-md p-4">
  <a class="flex flex-wrap items-baseline mb-4" href="/service/{occur.path}">
    <h3 class="text-2xl">{occur.title}</h3>
    <span class="text-gray-500">—{(occur.price.labor + occur.price.material).toLocaleString()}</span>
  </a>
  <p class="text-gray-500 md:columns-2">{occur.description}</p>
</div>

<div class="flex items-center" id="about">
  <div class="w-5/6 sm:w-3/4 lg:w-1/2 flex-none p-4">
    <div class="flex flex-wrap items-baseline mb-10">
      <h2 class="text-4xl lg:text-5xl xl:text-6xl">About</h2>
      <span class="">—me</span>
    </div>
    <p class="text-2xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, repellat mollitia blanditiis nobis ratione
      rerum culpa nihil enim!
    </p>
  </div>
  <div class="w-1/6 sm:w-1/4 lg:w-1/2 flex-none shadow-md" style="height: 80vh;">
    <img class="object-cover h-full w-full" src="https://i.imgur.com/7aMhZNV.jpg" alt="Living Room" />
  </div>
</div>

<div class="flex items-center" id="contact">
  <div class="w-1/6 sm:w-1/4 lg:w-1/2 flex-none shadow-md" style="height: 80vh;">
    <img class="object-cover h-full w-full" src="https://i.imgur.com/na4MdN3.jpeg" alt="Sunlight Interior" />
  </div>
  <div class="w-5/6 sm:w-3/4 lg:w-1/2 flex-none p-4">
    <div class="flex flex-wrap items-baseline mb-10">
      <h2 class="text-4xl lg:text-5xl xl:text-6xl">Contact</h2>
      <span class="">—us</span>
    </div>
    <div class="">
      <label class="block mb-4">
        <span class="text-2xl block mb-2"> Your e-mail </span>
        <input class="block w-full" placeholder="example@mail.com" type="email" />
      </label>
      <label class="block mb-4">
        <span class="text-2xl block mb-2"> Your name </span>
        <input class="block w-full" placeholder="Tanya" type="text" />
      </label>
      <label class="block mb-4">
        <span class="text-2xl block mb-2"> Your message </span>
        <textarea class="block w-full" placeholder="I have a small house. How you can help?" rows="5"></textarea>
      </label>
      <button class="px-10 py-4 bg-gray-900 text-white"> Send </button>
    </div>
  </div>
</div>
