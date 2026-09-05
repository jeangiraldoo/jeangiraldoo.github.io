<script lang="ts">
	import type { Component } from "svelte";

	interface Tag {
		label: string;
		icon?: Component;
		iconColour?: string;
	}

	interface props {
		class?: string;
		tags: Tag[];
		tagColour?: string;
		textColour?: string;
		fontSize?: string;
		iconSize?: string;
		hoverEffect?: boolean;
	}
	const {
		class: className,
		tags,
		tagColour,
		textColour,
		fontSize,
		iconSize = "1em",
		hoverEffect = false,
	}: props = $props();
</script>

<ul
	class={`flex flex-wrap p-0 gap-[7px] justify-center list-none ${className ?? ""}`}
	class:hoverable={hoverEffect}
	style:--tag-colour={tagColour}
	style:--text-colour={textColour}
	style:--font-size={fontSize}
	style:--icon-size={iconSize}
>
	{#each tags as tag}
		{@const Icon = tag.icon}
		<li
			class="tag inline-flex items-center justify-center gap-[5px] bg-[var(--tag-colour)] text-[var(--text-colour)] px-2.5 py-[5px] rounded-[3px] text-center m-0 text-[length:var(--font-size,0.875rem)] [&_svg]:size-[var(--icon-size,1em)] [&_svg]:shrink-0"
		>
			{#if Icon}
				<Icon color={tag.iconColour} />
			{/if}
			{tag.label}
		</li>
	{/each}
</ul>

<style>
	ul.hoverable .tag {
		transition:
			transform 0.3s,
			padding 0.3s;

		&:hover {
			transform: scale(1.03);
			padding: 5px 14px;
		}
	}
</style>