<script lang="ts">
	import { m } from "$lib/paraglide/messages.js";
	import projects from "./data.json";
	import CodeLogo from "@lucide/svelte/icons/code-xml";
	import LinkIcon from "$lib/components/LinkIcon.svelte";
	import TagsList from "$lib/components/TagsList.svelte";
	import Title from "$lib/components/Title.svelte";

	const message_map = {
		project_codedocs_name: m.project_codedocs_name,
		project_codedocs_description: m.project_codedocs_description,
		project_personal_website_name: m.project_personal_website_name,
		project_personal_website_description:
			m.project_personal_website_description,
	};

	type ProjectMessageKey = keyof typeof message_map;

	for (const project of projects) {
		for (const key of Object.values(project.message_keys)) {
			if (!(key in message_map)) {
				throw new Error(`Unknown message key in data.json: ${key}`);
			}
		}
	}

	function get_message(key: string): () => string {
		return message_map[key as ProjectMessageKey];
	}
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
	<div class="grid grid-cols-3 gap-4 max-md:grid-cols-1">
		{#each projects as project}
			<article
				class="flex flex-col w-full rounded-lg border border-white/10 transition-transform hover:scale-[1.021]"
			>
				<img
					src={project.image_path}
					alt={get_message(project.message_keys.name)()}
					class="h-44 w-auto shrink-0 rounded-lg max-md:h-auto max-md:w-full max-md:object-cover"
				/>

				<div class="flex flex-col p-2.5 gap-5 bg-white/5 w-full flex-1 min-w-0">
					<header class="flex flex-wrap items-center gap-[2%]">
						<h2
							class="text-3xl m-0 min-h-[4.2rem] flex items-center max-md:text-xl max-md:min-h-0"
						>
							{get_message(project.message_keys.name)()}
						</h2>
					</header>

					<!-- <p class="project-description"> -->
					<!-- 	{project.description} -->
					<!-- </p> -->
					<p
						class="my-0 hyphens-auto text-base text-[var(--theme-text-colour)] min-h-[4.5em] max-md:min-h-0 max-md:text-sm"
					>
						{get_message(project.message_keys.description)()}
					</p>

					<TagsList
						tags={project.stack.map((tech) => ({ label: tech }))}
						tagColour="#8dd9a1"
					/>
					{#if project.source_code}
						<LinkIcon
							class="mt-auto justify-center px-3.5 py-2 rounded-md bg-[var(--theme-secondary-colour)] transition-colors hover:bg-[hsl(166,92%,78%)] [&_svg]:size-4"
							href={project.source_code}
							label={m.code_link_label()}
							labelColour="white"
							hoverLabelColour="black"
							fontSize="0.875rem"
							Icon={CodeLogo}
							iconPosition="left"
						/>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</main>
