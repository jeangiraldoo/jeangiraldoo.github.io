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
			console.log("pressed escape");
		}

		document.addEventListener("click", on_click);
		document.addEventListener("keydown", on_key);
		return () => {
			document.removeEventListener("click", on_click);
			document.removeEventListener("keydown", on_key);
		};
	});
</script>

<div id="language-picker" bind:this={root}>
	<button
		type="button"
		class="picker-trigger"
		aria-expanded={open}
		aria-label={m.language_picker_aria()}
		onclick={() => (open = !open)}
	>
		<span class="picker-flag" aria-hidden="true">
			{@html flags[current]}
		</span>
		{labels[current]()}
	</button>

	{#if open}
		<div class="picker-list">
			{#each locales as l (l)}
				<button
					type="button"
					class="picker-option"
					class:selected={l === current}
					onclick={() => pick(l)}
				>
					<span class="picker-flag" aria-hidden="true">
						{@html flags[l]}
					</span>
					{labels[l]()}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	#language-picker {
		position: relative;
		display: inline-flex;
	}

	.picker-trigger {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background-color: var(--theme-secondary-colour);
		color: black;
		border: none;
		border-radius: 9999px;
		padding: 0.4rem 0.75rem 0.4rem 1rem;
		font-family: inherit;
		font-size: var(--header-font-size);
		cursor: pointer;
	}

	.picker-flag {
		display: inline-flex;
		color: white;
	}

	.picker-flag :global(svg) {
		width: 1.25rem;
		height: 1.25rem;
	}

	.picker-list {
		position: absolute;
		top: calc(100% + 0.35rem);
		inset-inline-end: 0;
		min-width: 100%;
		display: flex;
		flex-direction: column;
		padding: 0.3rem;
		background-color: var(--theme-bg-colour);
		border-radius: 12px;
		box-shadow: 0 8px 24px hsl(0 0% 0% / 0.35);
		z-index: 20;
	}

	.picker-option {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		padding: 0.45rem 0.7rem;
		background: none;
		border: none;
		border-radius: 8px;
		color: white;
		font-family: inherit;
		font-size: var(--header-font-size);
		text-align: left;
		white-space: nowrap;
		cursor: pointer;
	}

	.picker-option:hover,
	.picker-option:focus-visible {
		background-color: hsl(0 0% 100% / 0.12);
	}

	.picker-option.selected {
		font-weight: bold;
	}

	@media (max-width: 800px) {
		.picker-trigger {
			font-size: 1.3rem;
		}
	}
</style>
