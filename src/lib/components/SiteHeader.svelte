<script lang="ts">
	import { localizeHref } from "$lib/paraglide/runtime";
	import { page } from "$app/state";
	import { m } from "$lib/paraglide/messages.js";

	import LanguagePicker from "$lib/components/LanguagePicker.svelte";
	import Toggle from "$lib/components/Toggle.svelte";

	import MenuIcon from "@lucide/svelte/icons/square-menu";
	import XIcon from "@lucide/svelte/icons/square-x";

	let isBurguerButtonDisplayed = $state(false);

	function toggleBurguerNav() {
		if (!window.matchMedia("(max-width: 800px)").matches) {
			return;
		}

		let nav = document.getElementById("panel");

		isBurguerButtonDisplayed = !isBurguerButtonDisplayed;

		if (nav == null) {
			return;
		}

		let newDisplay = isBurguerButtonDisplayed ? "flex" : "none";

		nav.style.display = newDisplay;
	}

	let currentPage = $derived(page.url.pathname);

	const pages: Record<string, () => string> = {
		"/": m.nav_home,
		"/projects": m.nav_projects,
		"/blog": m.nav_blog,
		"/about": m.nav_about,
		"/contact": m.nav_contact,
	};

	function isWithinPath(path: string) {
		return currentPage.includes(localizeHref(path));
	}

	import ToggleRightIcon from "@lucide/svelte/icons/toggle-right";
	import ToggleLeftIcon from "@lucide/svelte/icons/toggle-left";

	interface Props {
		isLightModeOn: boolean;
	}

	let { isLightModeOn }: Props = $props();
</script>

<header
	class="flex bg-[var(--theme-bg-colour)] flex-wrap items-center px-5 gap-x-[30px] gap-y-2.5 max-md:px-2.5 max-md:gap-x-2.5 sticky top-0 z-10"
>
	<div class="relative flex-1 max-md:order-3 max-md:flex-none">
		<Toggle
			class="hidden bg-transparent border-none max-md:flex max-md:relative max-md:z-30 [&_svg]:text-primary cursor-pointer"
			initialState={isBurguerButtonDisplayed}
			handler={toggleBurguerNav}
		>
			{#snippet onIcon()}
				<XIcon />
			{/snippet}
			{#snippet offIcon()}
				<MenuIcon />
			{/snippet}
		</Toggle>
		<div
			id="panel"
			class="flex rounded-[9px] gap-5 max-md:fixed max-md:items-center max-md:hidden max-md:flex-col max-md:gap-32 max-md:pt-8 max-md:justify-center max-md:right-0 max-md:bottom-0 max-md:top-0 max-md:bg-[#2c4770] max-md:w-1/2 max-md:min-w-min max-md:overflow-y-auto"
		>
			<nav
				class="flex flex-wrap gap-5 max-md:flex-col max-md:items-center max-md:gap-12 max-md:order-1 [&>a:first-child]:text-[var(--theme-primary-colour)] [&>a:first-child]:text-2xl [&>a:first-child]:hover:text-[var(--theme-primary-colour)]"
			>
				{#each Object.entries(pages) as [path, message]}
					<a
						href={localizeHref(path)}
						aria-current={isWithinPath(path) ? "page" : undefined}
						class="flex items-center text-white text-xl hover:text-secondary max-md:text-2xl max-md:text-black"
						class:text-secondary={isWithinPath(path)}
					>
						{message()}
					</a>
				{/each}
			</nav>
			<LanguagePicker />
		</div>
	</div>
	<Toggle
		class="max-md:order-2 max-md:ms-auto"
		initialState={isLightModeOn}
		handler={(isNextLight: boolean) => {
			document.body.classList.remove("dark-mode", "light-mode");

			const newTheme = isNextLight ? "light-mode" : "dark-mode";

			document.body.classList.add(newTheme);
			localStorage.setItem("jeangiraldooTheme", newTheme);
		}}
	>
		{#snippet onIcon()}
			<ToggleRightIcon class="size-14 text-black max-md:size-7" />
		{/snippet}

		{#snippet offIcon()}
			<ToggleLeftIcon class="size-14 text-white max-md:size-7" />
		{/snippet}
	</Toggle>
</header>
