<script>
	import { m } from "$lib/paraglide/messages.js";
	import RichMessage from "$lib/components/RichMessage.svelte";
	import Title from "$lib/components/Title.svelte";
</script>

<main class="w-3/4 max-md:w-[90%] flex flex-col gap-12 my-10 mx-auto">
	<Title
		title={m.about_label()}
		level={1}
		size="2.5rem"
		colour="var(--theme-primary-colour)"
		align="left"
		class="max-md:text-3xl"
	/>
	<section id="background-section">
		<p><RichMessage message={m.about_background_intro} /></p>
		<p><RichMessage message={m.about_background_childhood} /></p>
		<p><RichMessage message={m.about_background_first_steps} /></p>
		<p><RichMessage message={m.about_background_projects_link} /></p>
	</section>

	<section>
		<Title
			title={m.education_label()}
			level={2}
			size="1.75rem"
			colour="var(--theme-primary-colour)"
			align="left"
			class="max-md:text-xl"
		/>
		<ul id="education-container">
			<li class="education-instance">
				<h3>{m.education_multimedia_degree()}</h3>
				<h3>{m.education_multimedia_date()}</h3>
				<h3>{m.education_multimedia_university()}</h3>
				<p>
					<RichMessage message={m.education_multimedia_motivation} />
				</p>
				<p><RichMessage message={m.education_multimedia_dropout} /></p>
			</li>
			<li class="education-instance">
				<h3>{m.education_systems_degree()}</h3>
				<h3>{m.education_systems_date()}</h3>
				<h3>{m.education_systems_university()}</h3>
			</li>
		</ul>
	</section>

	<section>
		<Title
			title={m.languages_label()}
			level={2}
			size="1.75rem"
			colour="var(--theme-primary-colour)"
			align="left"
			class="max-md:text-xl"
		/>
		<ul id="languages-container">
			<li>
				<h3>{m.spanish_label()}</h3>
				<p>{m.native_level()}</p>
			</li>
			<li>
				<h3>{m.english_label()}</h3>
				<p>{m.english_level()}</p>
			</li>
			<li>
				<h3>{m.portuguese_label()}</h3>
				<p>{m.portuguese_level()}</p>
			</li>
		</ul>
	</section>

	<section>
		<Title
			title={m.hobbies_label()}
			level={2}
			size="1.75rem"
			colour="var(--theme-primary-colour)"
			align="left"
			class="max-md:text-xl"
		/>
		<ul id="hobbies-container">
			<li>
				<h3>{m.hobby_programming()}</h3>
				<p><RichMessage message={m.hobby_programming_description} /></p>
			</li>
			<li>
				<h3>{m.hobby_reading()}</h3>
				<p><RichMessage message={m.hobby_reading_description} /></p>
			</li>
			<li>
				<h3>{m.hobby_games()}</h3>
				<p><RichMessage message={m.hobby_games_description} /></p>
			</li>
		</ul>
	</section>
</main>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 40px;

		p {
			color: var(--theme-text-colour);
			margin: 0;
			font-size: 1rem;
		}

		ul {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			gap: 1rem;
			list-style: none;
			margin: 0;
			padding: 0;

			h3 {
				color: var(--card-accent);
				margin: 0 0 10px 0;
				font-size: 1.375rem;
			}

			p {
				margin: 0;
				text-align: left;
				color: var(--theme-text-colour);
				font-size: 1rem;

				:global(span) {
					color: var(--card-accent);
				}
			}

			& > li {
				padding: 20px;
				border: 1px solid var(--card-accent);
				border-radius: 10px;
			}
		}
	}

	#education-container {
		--card-accent: var(--theme-secondary-colour);
	}

	#languages-container {
		--card-accent: var(--theme-quaternary-colour);
	}

	#hobbies-container {
		--card-accent: var(--theme-tertiary-colour);
	}

	.education-instance {
		h3 {
			margin: 0;
			color: var(--theme-text-colour);
			font-size: 1.125rem;

			&:first-child {
				color: var(--card-accent);
				font-size: 1.375rem;
			}

			&:nth-child(2) {
				color: var(--theme-quaternary-colour);
				font-size: 0.875rem;
			}
		}

		p {
			margin: 10px 0 0 0;
			font-size: 1rem;
		}
	}

	#background-section {
		:global(a) {
			color: var(--theme-primary-colour);
		}

		p {
			text-align: left;
		}
	}

	@media (max-width: 768px) {
		section ul h3 {
			font-size: 1.125rem;
		}

		.education-instance h3 {
			font-size: 1rem;
		}

		.education-instance h3:first-child {
			font-size: 1.125rem;
		}
	}
</style>
