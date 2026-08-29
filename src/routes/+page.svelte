<script>
	import { m } from "$lib/paraglide/messages.js";
</script>

<svelte:head>
	<title>Jean Giraldo</title>
</svelte:head>

<main id="personal-info">
	<img src="/images/profile.jpeg" alt="Jean Giraldo" />
	<h1>Jean Giraldo</h1>
	<h2>{m.job_title()}</h2>
	<div id="buttons">
		<a id="get-in-touch" href="/contact">{m.contact_me_home_button()}</a>
		<a id="view-projects" href="/projects"
			>{m.view_projects_home_button()}</a
		>
	</div>
</main>

<style>
	#personal-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 100%;
		box-sizing: border-box;
		padding-bottom: 15vh;

		img {
			width: 250px;
			height: 250px;
			border-radius: 20px;
		}

		h1 {
			color: var(--theme-text-colour);
			font-size: 2.5rem;
			margin: 30px 0 0 0;
		}

		h2 {
			color: var(--theme-primary-colour);
			font-size: 1.75rem;
			margin: 10px 0 0 0;
		}
	}

	#buttons {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-top: 30px;

		a {
			display: inline-block;
			padding: 12px 24px;
			border-radius: 10px;
			font-size: 1.25rem;
			font-weight: bold;
			transition:
				transform 0.2s,
				background-color 0.3s;

			&:hover {
				background-color: hsl(192, 100%, 78%);
				transform: scale(1.035, 1.035);
			}
		}

		#get-in-touch {
			background-color: var(--theme-primary-colour);
			color: var(--theme-bg-colour);

			&:hover {
				background-color: hsl(192, 100%, 78%);
			}
		}

		#view-projects {
			background-color: var(--theme-secondary-colour);
			color: var(--theme-bg-colour);

			&:hover {
				background-color: hsl(166, 92%, 78%);
			}
		}
	}

	@media (max-width: 768px) {
		main {
			width: 90%;
			padding-bottom: 5vh;
		}

		#buttons {
			flex-wrap: wrap;
		}
	}
</style>
