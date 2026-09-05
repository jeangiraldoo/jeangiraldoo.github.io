<script lang="ts">
	import type { Snippet } from "svelte";

	interface BentoItem {
		content: Snippet;
		span?: number;
		spanRow?: number;
		accent?: string;
	}

	interface Props {
		items: BentoItem[];
		numCols: number;
		backgroundColour: string;
	}

	let {
		items,
		backgroundColour,
		numCols,
	}: Props = $props();
</script>

<div
	class="bento-box grid gap-4"
	style:--num-cols={numCols}
	style:--background-colour={backgroundColour}
>
	{#each items as item}
		<div
			class="bento-item flex flex-col justify-center px-5 py-4 rounded-lg border border-white/10 bg-[var(--background-colour)] text-[var(--theme-text-colour)] transition-[transform,border-color] hover:scale-[1.02]"
			style:--bento-item-span={item.span}
			style:--bento-item-row-span={item.spanRow}
			style:--border-item-accent={item.accent}
		>
			{@render item.content()}
		</div>
	{/each}
</div>

<style>
	.bento-box {
		grid-template-columns: repeat(var(--num-cols), 1fr);
	}

	.bento-item {
		grid-column: span var(--bento-item-span, 1);
		grid-row: span var(--bento-item-row-span, 1);

		&:hover {
			border-color: var(--border-item-accent, var(--theme-primary-colour));
		}
	}

	@media (max-width: 600px) {
		.bento-item {
			grid-column: 1 / -1;
			grid-row: auto;
		}
	}
</style>