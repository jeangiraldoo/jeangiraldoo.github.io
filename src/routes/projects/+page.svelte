<script lang="ts">
	import { m } from "$lib/paraglide/messages.js";
	import projects from "./data.json";

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

						{#if project.source_code}
							<a href={project.source_code}
								>{m.code_link_label()}</a
							>
						{/if}
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
		display: flex;
		flex-direction: column;
		gap: 20px;

		.project {
			box-sizing: border-box;
			display: flex;
			gap: 2%;
			padding: 2%;
			margin: 0;
			background-color: #b4cae0;
			width: 100%;
			border-radius: 10px;
			transition: transform 0.3s;

			&:hover {
				transform: scale(1.021, 1.021);
			}

			img {
				max-width: 400px;
				width: 40%;
				height: auto;
				flex-shrink: 0;
			}

			.project-info {
				display: flex;
				flex-direction: column;
				gap: 20px;
				width: 100%;
				flex: 1;
				min-width: 0;

				.project-header {
					display: flex;
					flex-wrap: wrap;
					gap: 2%;
					align-items: center;

					a {
						color: #393799;
					}
				}

				.project-description {
					margin: 0;
					hyphens: auto;
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
			}
		}
	}

	@media (max-width: 768px) {
		main {
			width: 90%;
			max-width: 415px;

			h2 {
				font-size: 20px;
			}
		}

		.project {
			display: block;

			img {
				width: 100%;
				max-width: 100%;
				max-height: 30vh;
			}

			.project-description {
				font-size: 14px;
			}

			.project-stack p {
				font-size: 10px;
			}
		}
	}
</style>
