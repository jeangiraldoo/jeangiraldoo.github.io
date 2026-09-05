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
		class?: string;
		gap?: string;
		numCols: number;
		backgroundColour: string;
	}

	let {
		items,
		class: className,
		backgroundColour,
		gap = "15px",
		numCols,
	}: Props = $props();
</script>

<div
	class={`bento-box ${className ?? ""}`}
	style:--num-cols={numCols}
	style:--bento-gap={gap}
	style:--background-colour={backgroundColour}
>
	{#each items as item}
		<div
			class="bento-item"
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
		display: grid;
		grid-template-columns: repeat(var(--num-cols), 1fr);
		gap: var(--bento-gap);
	}

	.bento-item {
		grid-column: span var(--bento-item-span, 1);
		grid-row: span var(--bento-item-row-span, 1);

		display: flex;
		flex-direction: column;
		justify-content: center;

		padding: 18px 20px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		background-color: var(--background-colour);
		color: var(--theme-text-colour);
		transition:
			transform 0.25s,
			border-color 0.25s;

		&:hover {
			transform: scale(1.02);
			border-color: var(--border-item-accent, var(--theme-primary-colour));
		}
	}

	@media (max-width: 600px) {
		.bento-box {
			--num-cols: 1;
		}

		.bento-item {
			grid-column: 1 / -1;
			grid-row: auto;
		}
	}
</style>