<script lang="ts">
	import type { Component } from "svelte";

	interface Tag {
		label: string;
		icon?: Component;
		iconColour?: string;
	}

	interface props {
		id?: string;
		class?: string;
		tags: Tag[];
		tagColour?: string;
		backgroundColour?: string;
		textColour?: string;
		tagGap?: string;
		fontSize?: string;
		iconPosition?: "left" | "right";
		iconSize?: string;
		hoverEffect?: boolean;
	}
	const {
		id,
		class: className,
		tags,
		tagColour,
		backgroundColour,
		textColour,
		tagGap,
		fontSize,
		iconPosition = "left",
		iconSize = "1em",
		hoverEffect = false,
	}: props = $props();
</script>

<ul
	{id}
	class={className}
	class:hoverable={hoverEffect}
	style:--background-colour={backgroundColour}
	style:--tag-colour={tagColour}
	style:--text-colour={textColour}
	style:--tag-gap={tagGap}
	style:--font-size={fontSize}
	style:--icon-size={iconSize}
>
	{#each tags as tag}
		{@const Icon = tag.icon}
		<li class="tag">
			{#if Icon && iconPosition === "left"}
				<Icon color={tag.iconColour} />
			{/if}
			{tag.label}
			{#if Icon && iconPosition === "right"}
				<Icon color={tag.iconColour} />
			{/if}
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		padding: 0;
		gap: 7px;
		justify-content: center;
		list-style: none;
		background-color: var(--background-colour);

		.tag {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			gap: var(--tag-gap, 5px);
			background-color: var(--tag-colour);
			color: var(--text-colour);
			padding: var(--tag-padding-y, 5px) var(--tag-padding-x, 10px);
			border-radius: 3px;
			text-align: center;
			margin: 0;
			font-size: var(--font-size, 0.875rem);

			:global(svg) {
				width: var(--icon-size, 1em);
				height: var(--icon-size, 1em);
				flex-shrink: 0;
			}
		}

		&.hoverable {
			.tag {
				transition:
					transform 0.3s,
					padding 0.3s;

				&:hover {
					transform: scale(1.03);
					padding: var(--tag-padding-y, 5px)
						calc(var(--tag-padding-x, 10px) + 4px);
				}
			}
		}
	}
</style>