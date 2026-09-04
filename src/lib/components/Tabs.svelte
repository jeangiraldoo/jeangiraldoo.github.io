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

<div class="tabs">
	<div class="tabs-nav" role="tablist" aria-label={ariaLabel}>
		{#each tabs as tab, i (i)}
			<button
				type="button"
				role="tab"
				id={`${i}-tab`}
				aria-selected={i === activeIndex}
				aria-controls={`${i}-panel`}
				class="tabs-nav-button"
				class:active={i === activeIndex}
				onclick={() => (activeIndex = i)}
			>
				{tab.label}
			</button>
		{/each}
	</div>

	<div
		class="tab-panel"
		role="tabpanel"
		id={`${activeIndex}-panel`}
		aria-labelledby={`${activeIndex}-tab`}
	>
		{@render tabs[activeIndex].content()}
	</div>
</div>

<style>
	.tabs {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.tabs-nav {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		justify-content: center;

		.tabs-nav-button {
			padding: 8px 16px;
			border-radius: 6px;
			border: none;
			background-color: var(--theme-bg-colour);
			color: darkgrey;
			font-family: inherit;
			font-weight: bold;
			font-size: 1rem;
			cursor: pointer;
			transition:
				transform 0.2s,
				background-color 0.3s;

			&:hover {
				transform: scale(1.035, 1.035);
			}

			&.active {
				color: var(--theme-primary-colour);
			}
		}
	}
</style>