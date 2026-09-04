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
	import Tabs from "./Tabs.svelte";
	import TagsList from "./TagsList.svelte";

	const technologyGroups: Record<string, string[]> = { ...technologies };
	technologyGroups.All = Object.values(technologyGroups).flat();

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
</script>

{#snippet pills(stack: string[])}
	<TagsList
		tags={stack.map((tech) => ({
			label: tech,
			icon: iconMap[tech]?.component,
			iconColour: iconMap[tech]?.color,
		}))}
		tagColour="dimgrey"
		textColour="white"
		fontSize="1rem"
		iconSize="1.3rem"
		hoverEffect
	/>
{/snippet}

{#snippet allTab()}
	{@render pills(technologyGroups.All)}
{/snippet}
{#snippet languagesTab()}
	{@render pills(technologyGroups.Languages)}
{/snippet}
{#snippet frameworksTab()}
	{@render pills(technologyGroups.Frameworks)}
{/snippet}
{#snippet databasesTab()}
	{@render pills(technologyGroups.Databases)}
{/snippet}
{#snippet devopsTab()}
	{@render pills(technologyGroups.DevOps)}
{/snippet}
{#snippet othersTab()}
	{@render pills(technologyGroups.Others)}
{/snippet}

<Tabs
	ariaLabel="Technology categories"
	tabs={[
		{ label: m.techstack_all_label(), content: allTab },
		{ label: m.techstack_languages_label(), content: languagesTab },
		{ label: m.techstack_frameworks_label(), content: frameworksTab },
		{ label: m.techstack_databases_label(), content: databasesTab },
		{ label: m.techstack_devops_label(), content: devopsTab },
		{ label: m.techstack_others_label(), content: othersTab },
	]}
/>

