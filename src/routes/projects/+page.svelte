<script lang="ts">
	import { m } from "$lib/paraglide/messages.js";
	import projects from "./data.json";
	import CodeLogo from "@lucide/svelte/icons/code-xml";
	import LinkIcon from "$lib/components/LinkIcon.svelte";

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

<main>
	<div id="projects-container">
		{#each projects as project}
			<article class="project">
				<img
					src={project.image_path}
					alt={get_message(project.message_keys.name)()}
				/>

				<div class="project-info">
					<header class="project-header">
						<h2>{get_message(project.message_keys.name)()}</h2>
					</header>

					<!-- <p class="project-description"> -->
					<!-- 	{project.description} -->
					<!-- </p> -->
					<p class="project-description">
						{get_message(project.message_keys.description)()}
					</p>

					<div class="project-stack">
						{#each project.stack as technology}
							<p>{technology}</p>
						{/each}
					</div>
					{#if project.source_code}
						<LinkIcon
							class="project-link"
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

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 30px;
		margin: 40px auto;
	}

	#projects-container {
		display: grid;
		grid-template-columns: repeat(3, 0.5fr);
		gap: 15px;

		.project {
			display: flex;
			flex-direction: column;
			width: 100%;
			border-radius: 10px;
			transition: transform 0.3s;
			border: 1px solid rgba(255, 255, 255, 0.1);

			&:hover {
				transform: scale(1.021, 1.021);
			}

			img {
				/* max-width: 400px; */
				width: auto;
				height: 180px;
				flex-shrink: 0;
				border-radius: 10px;
			}

			.project-info {
				display: flex;
				background-color: rgba(255, 255, 255, 0.05);
				flex-direction: column;
				padding: 10px;
				gap: 20px;
				width: 100%;
				flex: 1;
				min-width: 0;

				.project-header {
					display: flex;
					flex-wrap: wrap;
					gap: 2%;
					align-items: center;

					h2 {
						font-size: 1.75rem;
						margin: 0;
						min-height: 4.2rem;
						display: flex;
						align-items: center;
					}
				}

				.project-description {
					margin: 0;
					hyphens: auto;
					font-size: 1rem;
					color: var(--theme-text-colour);
					min-height: 4.5em;
				}

				.project-stack {
					display: flex;
					flex-wrap: wrap;
					gap: 7px;
					justify-content: center;

					p {
						background-color: #8dd9a1;
						padding: 5px 10px;
						border-radius: 3px;
						text-align: center;
						margin: 0;
					}
				}

				:global(.project-link) {
					margin-top: auto;

					justify-content: center;
					padding: 8px 14px;
					border-radius: 6px;
					background-color: var(--theme-secondary-colour);
					transition: background-color 0.2s;

					&:hover {
						background-color: hsl(166, 92%, 78%);
					}

					:global(svg) {
						width: 1.1em;
						height: 1.1em;
					}
				}
			}
		}
	}

	@media (max-width: 768px) {
		main {
			width: 90%;
			max-width: 415px;
		}

		#projects-container {
			grid-template-columns: 1fr;
		}

		.project {
			img {
				width: 100%;
				height: auto;
				object-fit: cover;
			}

			.project-info {
				.project-header {
					h2 {
						font-size: 1.25rem;
						min-height: 0;
					}
				}

				.project-description {
					font-size: 0.875rem;
					min-height: 0;
				}

				.project-stack p {
					font-size: 0.75rem;
				}
			}
		}
	}
</style>
