<script lang="ts">
	import { m } from "$lib/paraglide/messages.js";
	import projectData from "$lib/../routes/projects/data.json";

	import CodeLogo from "@lucide/svelte/icons/code-xml";
	import Button from "$lib/components/Button.svelte";
	import TagsList from "$lib/components/TagsList.svelte";

	let projects = projectData;

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

	interface Props {
		max?: number;
		onlyFeatured?: boolean;
	}

	let { max: max, onlyFeatured }: Props = $props();

	if (onlyFeatured) {
		projects = projects.filter((project) => project.featured);
	}

	if (max !== undefined) {
		projects = projects.slice(0, max);
	}
</script>

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

			<div
				class="flex flex-col p-2.5 gap-5 bg-white/5 w-full flex-1 min-w-0"
			>
				<h2
					class="flex text-2xl justify-center text-secondary m-0 min-h-[4.2rem] items-center max-md:text-xl max-md:min-h-0"
				>
					{get_message(project.message_keys.name)()}
				</h2>

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
					<Button
						class="mt-auto w-full justify-center text-center px-3.5 py-2 rounded-md text-black text-sm bg-[var(--theme-secondary-colour)] transition-colors hover:bg-[hsl(166,92%,78%)] [&_svg]:size-4"
						href={project.source_code}
						message={m.code_link_label()}
						icon={CodeLogo}
						iconPosition="left"
					/>
				{/if}
			</div>
		</article>
	{/each}
</div>

<style>
</style>
