<script lang="ts">
	import { m } from "$lib/paraglide/messages.js";
	import Title from "$lib/components/Title.svelte";
	import ProjectsPreview from "$lib/components/ProjectsPreview.svelte";
</script>

<main class="w-3/4 max-md:w-[90%] max-md:max-w-[415px] flex flex-col gap-8 my-10 mx-auto">
	<Title
		title={m.projects_label()}
		level={1}
		size="2.5rem"
		colour="var(--theme-primary-colour)"
		align="left"
		class="max-md:text-3xl"
	/>
	<ProjectsPreview />
</main>
