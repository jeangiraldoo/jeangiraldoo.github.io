<script lang="ts">
	import { getLocale, locales, setLocale } from "$lib/paraglide/runtime";
	import { m } from "$lib/paraglide/messages.js";

	import { GB, ES } from "country-flag-icons/string/3x2";
	const flags = { en: GB, es: ES };

	const labels: Record<string, () => string> = {
		en: m.english_label,
		es: m.spanish_label,
	};

	const current = getLocale();

	let open = $state(false);
	let root: HTMLDivElement = $state()!;

	function pick(locale: string) {
		open = false;
		if (locale !== current) setLocale(locale as (typeof locales)[number]);
	}

	$effect(() => {
		if (!open) return;

		function on_click(event: MouseEvent) {
			if (!root.contains(event.target as Node)) open = false;
		}

		function on_key(event: KeyboardEvent) {
			if (event.key === "Escape") open = false;
		}

		document.addEventListener("click", on_click);
		document.addEventListener("keydown", on_key);
		return () => {
			document.removeEventListener("click", on_click);
			document.removeEventListener("keydown", on_key);
		};
	});
</script>

<div bind:this={root} class="relative inline-flex ml-auto max-md:order-0 max-md:m-0">
	<button
		type="button"
		aria-expanded={open}
		aria-label={m.language_picker_aria()}
		class="inline-flex items-center gap-2 bg-[var(--theme-secondary-colour)] text-black rounded-full py-[0.4rem] pl-4 pr-3 text-xl cursor-pointer"
		onclick={() => (open = !open)}
	>
		<span class="inline-flex [&_svg]:size-5" aria-hidden="true">
			{@html flags[current]}
		</span>
		{labels[current]()}
	</button>

	{#if open}
		<div
			class="absolute top-[calc(100%+0.35rem)] end-0 min-w-full flex flex-col p-1.5 bg-[var(--theme-bg-colour)] rounded-xl shadow-[0_8px_24px_hsl(0_0%_0%_/_0.35)] z-20"
		>
			{#each locales as l (l)}
				<button
					type="button"
					class="flex items-center gap-2 w-full px-2.5 py-2 bg-transparent rounded-lg text-white text-xl text-left whitespace-nowrap cursor-pointer hover:bg-white/12 focus-visible:bg-white/12"
					class:font-bold={l === current}
					onclick={() => pick(l)}
				>
					<span class="inline-flex [&_svg]:size-5" aria-hidden="true">
						{@html flags[l]}
					</span>
					{labels[l]()}
				</button>
			{/each}
		</div>
	{/if}
</div>
