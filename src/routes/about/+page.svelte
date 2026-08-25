<script>
	import { m } from "$lib/paraglide/messages.js";
	import RichMessage from "$lib/components/RichMessage.svelte";
</script>

<main>
	<h1>{m.about_label()}</h1>
	<section id="background-section">
		<p><RichMessage message={m.about_background_intro} /></p>
		<p><RichMessage message={m.about_background_childhood} /></p>
		<p><RichMessage message={m.about_background_first_steps} /></p>
		<p><RichMessage message={m.about_background_projects_link} /></p>
	</section>

	<section>
		<h2>{m.education_label()}</h2>
		<ul id="education-container">
			<li class="education-instance">
				<h3>{m.education_multimedia_degree()}</h3>
				<h3>{m.education_multimedia_date()}</h3>
				<h3>{m.education_multimedia_university()}</h3>
				<p><RichMessage message={m.education_multimedia_motivation} /></p>
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
		<h2>{m.languages_label()}</h2>
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
		<h2>{m.hobbies_label()}</h2>
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
	main {
		display: flex;
		flex-direction: column;
		gap: 50px;
		margin: 40px auto;
	}

	h1,
	h2 {
		color: var(--theme-primary-colour);
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	section p {
		color: var(--theme-text-colour);
		margin: 0;
	}

	section ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	section ul > li {
		padding: 20px;
		border: 1px solid var(--card-accent);
		border-radius: 10px;
	}

	section ul h3 {
		color: var(--card-accent);
		margin: 0 0 10px 0;
	}

	section ul p {
		margin: 0;
		text-align: left;
		color: var(--theme-text-colour);
	}

section ul p :global(span) {
	color: var(--card-accent);
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

	.education-instance h3 {
		margin: 0;
		color: var(--theme-text-colour);
	}

	.education-instance h3:first-child {
		color: var(--card-accent);
	}

	.education-instance h3:nth-child(2) {
		color: var(--theme-quaternary-colour);
	}

	.education-instance p {
		margin: 10px 0 0 0;
	}

#background-section :global(a) {
	color: var(--theme-primary-colour);
	}

	#background-section p {
		text-align: left;
	}

	@media (max-width: 768px) {
		main {
			width: 90%;
		}
	}
</style>
