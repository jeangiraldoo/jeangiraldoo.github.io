<script lang="ts">
	import NavBar from "$lib/components/NavBar.svelte";
	import LanguagePicker from "$lib/components/LanguagePicker.svelte";

	import MenuIcon from "@lucide/svelte/icons/square-menu";
	import XIcon from "@lucide/svelte/icons/square-x";

	let isDisplayed = $state(false);

	function toggleBurguerNav() {
		if (!window.matchMedia("(max-width: 800px)").matches) {
			return;
		}

		let nav = document.getElementById("panel");

		isDisplayed = !isDisplayed;

		if (nav == null) {
			return;
		}

		let newDisplay = isDisplayed ? "flex" : "none";

		nav.style.display = newDisplay;
	}
</script>

<div class="relative flex-1 max-md:order-3 max-md:flex-none">
	<button
		class="hidden bg-transparent border-none max-md:flex max-md:relative max-md:z-30 [&_svg]:text-primary cursor-pointer"
		onclick={toggleBurguerNav}
	>
		{#if isDisplayed}
			<XIcon />
		{:else}
			<MenuIcon />
		{/if}
	</button>
	<div
		id="panel"
		class="flex rounded-[9px] gap-5 max-md:fixed max-md:items-center max-md:hidden max-md:flex-col max-md:gap-32 max-md:pt-8 max-md:justify-center max-md:right-0 max-md:bottom-0 max-md:top-0 max-md:bg-[#2c4770] max-md:w-1/2 max-md:min-w-min max-md:overflow-y-auto"
	>
		<NavBar />
		<LanguagePicker />
	</div>
</div>
