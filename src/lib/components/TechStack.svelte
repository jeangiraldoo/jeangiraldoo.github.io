<script lang="ts">
	import { m } from "$lib/paraglide/messages.js";
	import technologies from "$lib/technologies.json";
	import {
		SiTypescript,
		SiJavascript,
		SiLua,
		SiPython,
		SiSvelte,
		SiPostgresql,
		SiDocker,
		SiGithubactions,
		SiGit,
		SiNeovim,
		SiTmux,
		SiGo,
		SiGodotengine,
	} from "@icons-pack/svelte-simple-icons";
	import Code2 from "@lucide/svelte/icons/code-2";

	const technologyGroups: Record<string, string[]> = { ...technologies };
	technologyGroups.All = Object.values(technologyGroups).flat();
	const categories = Object.keys(technologyGroups);

	const iconMap: Record<string, any> = {
		TypeScript: { component: SiTypescript, color: "#3178C6" },
		JavaScript: { component: SiJavascript, color: "#F7DF1E" },
		Lua: { component: SiLua, color: "#2C2D72" },
		Python: { component: SiPython, color: "#3776AB" },
		Svelte: { component: SiSvelte, color: "#FF3E00" },
		PostgreSQL: { component: SiPostgresql, color: "#4169E1" },
		Docker: { component: SiDocker, color: "#2496ED" },
		"Github Actions": { component: SiGithubactions, color: "#2088FF" },
		Git: { component: SiGit, color: "#F05032" },
		Neovim: { component: SiNeovim, color: "#57A143" },
		VSCode: { component: Code2, color: "#007ACC" },
		TMux: { component: SiTmux, color: "#1BB91F" },
		Go: { component: SiGo, color: "#3178C6" },
		Godot: { component: SiGodotengine, color: "#2496ED" },
	};

	const categoryMessages: Record<string, () => string> = {
		All: m.techstack_all_label,
		Languages: m.techstack_languages_label,
		Frameworks: m.techstack_frameworks_label,
		Databases: m.techstack_databases_label,
		DevOps: m.techstack_devops_label,
		Others: m.techstack_others_label,
	};

	let activeCategory: string = $state(categories[0]);

	function selectCategory(category: string) {
		activeCategory = category;
	}
</script>

<div id="techstack-container">
	<div id="techstack-nav" aria-label="Technology categories">
		{#each categories as category}
			<button
				class="techstack-nav-button"
				class:active={category === activeCategory}
				onclick={() => selectCategory(category)}
			>
				{categoryMessages[category]?.() ?? category}
			</button>
		{/each}
	</div>

	<div id="techstack-items">
		<ul>
			{#each technologyGroups[activeCategory] as technology}
				{#if iconMap[technology]}
					{@const Cmp = iconMap[technology].component}
					<li>
						<Cmp color={iconMap[technology].color} />
						{technology}
					</li>
				{:else}
					<li>{technology}</li>
				{/if}
			{/each}
		</ul>
	</div>
</div>

<style>
	#techstack-container {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	#techstack-nav {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		justify-content: center;

		.techstack-nav-button {
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

	#techstack-items {
		ul {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 8px;
			justify-content: center;
			list-style: none;
			padding: 0;
			margin: 0;

			li {
				display: flex;
				align-items: center;
				gap: 6px;
				background-color: dimgrey;
				color: white;
				padding: 5px 12px;
				font-size: 1rem;
				border-radius: 3px;
				transition:
					padding 0.3s,
					transform 0.3s;

				&:hover {
					padding: 5px 16px; /* horizontal: pushes siblings sideways */
					transform: scale(1.03);
				}

				:global(svg) {
					width: 1.3rem;
					height: 1.3rem;
				}
			}
		}
	}
</style>
