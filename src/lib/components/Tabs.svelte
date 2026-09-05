<script lang="ts">
	import type { Snippet } from "svelte";

	interface Tab {
		label: string;
		content: Snippet;
	}

	interface TabsProps {
		tabs: Tab[];
		ariaLabel?: string;
	}

	let { tabs, ariaLabel }: TabsProps = $props();

	let activeIndex = $state(0);
</script>

<div class="flex flex-col gap-5">
	<div
		class="flex flex-wrap gap-2.5 justify-center"
		role="tablist"
		aria-label={ariaLabel}
	>
		{#each tabs as tab, i (i)}
			<button
				type="button"
				role="tab"
				id={`${i}-tab`}
				aria-selected={i === activeIndex}
				aria-controls={`${i}-panel`}
				class="px-4 py-2 rounded-md border-none bg-[var(--theme-bg-colour)] text-[darkgrey] font-bold text-base cursor-pointer transition-[transform,background-color] hover:scale-[1.035]"
				class:text-primary={i === activeIndex}
				onclick={() => (activeIndex = i)}
			>
				{tab.label}
			</button>
		{/each}
	</div>

	<div
		role="tabpanel"
		id={`${activeIndex}-panel`}
		aria-labelledby={`${activeIndex}-tab`}
	>
		{@render tabs[activeIndex].content()}
	</div>
</div>