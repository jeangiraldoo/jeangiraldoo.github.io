<script lang="ts">
	import { m } from "$lib/paraglide/messages.js";
	import { localizeHref } from "$lib/paraglide/runtime";

	import TechStack from "$lib/components/TechStack.svelte";
	import Button from "$lib/components/Button.svelte";
	import BentoBox from "$lib/components/BentoBox.svelte";

	import CrownIcon from "@lucide/svelte/icons/crown";
	import BookOpenIcon from "@lucide/svelte/icons/book-open";
	import GraduationIcon from "@lucide/svelte/icons/graduation-cap";
	import GlobeIcon from "@lucide/svelte/icons/globe";
	import MapPinnedLogo from "@lucide/svelte/icons/map-pinned";
	import ToolBoxLogo from "@lucide/svelte/icons/toolbox";
	import EarthLogo from "@lucide/svelte/icons/earth";
	import HandshakeLogo from "@lucide/svelte/icons/handshake";

	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Jean Giraldo</title>
</svelte:head>

{#snippet languages()}
	<div id="summary-languages-block">
		<header>
			<GlobeIcon />
			<h4>{m.languages_label()}</h4>
		</header>
		<ul id="languages-container">
			<li>
				<p>{m.spanish_label()}: {m.native_level()}</p>
			</li>
			<li>
				<p>{m.english_label()}: {m.english_level()}</p>
			</li>
			<li>
				<p>{m.portuguese_label()}: {m.portuguese_level()}</p>
			</li>
		</ul>
	</div>
{/snippet}

{#snippet education()}
	<div id="summary-education-block">
		<header>
			<GraduationIcon />
			<h4>{m.education_label()}</h4>
		</header>
		<h3 id="summary-education-level">
			{m.education_systems_degree()}
		</h3>
		<h3>{m.education_systems_date()}</h3>
		<h3>{m.education_systems_university()}</h3>
	</div>
{/snippet}

{#snippet location()}
	<div id="summary-location-block">
		<header>
			<MapPinnedLogo />
			<h4>{m.location_label()}</h4>
		</header>
		<p>{m.based_in_label()}</p>
		<p>{m.location_city_country()}</p>
	</div>
{/snippet}

<main>
	<section id="landing-section">
		<img src="/images/profile.jpeg" alt="Jean Giraldo" />
		<h1>Jean Giraldo</h1>
		<h2>{m.job_title()}</h2>
		<div id="buttons">
			<Button
				href={localizeHref("/contact")}
				message={m.contact_me_home_button()}
				backgroundColor="var(--theme-primary-colour)"
				hoverBackgroundColor="hsl(192, 100%, 78%)"
			/>
			<Button
				href={localizeHref("/projects")}
				message={m.view_projects_home_button()}
				backgroundColor="var(--theme-secondary-colour)"
				hoverBackgroundColor="hsl(166, 92%, 78%)"
			/>
		</div>
	</section>
	<section id="summary-section">
		<header class="section-title">
			<CrownIcon />
			<h3>{m.summary_label()}</h3>
		</header>
		<BentoBox
			numCols={3}
			backgroundColor="rgba(255, 255, 255, 0.04)"
			items={[
				{
					content: education,
					span: 2,
					spanRow: 2,
					accent: "var(--theme-secondary-colour)",
				},
				{
					content: location,
					span: 1,
					accent: "var(--theme-tertiary-colour)",
				},
				{
					content: languages,
					span: 1,
					accent: "var(--theme-quaternary-colour)",
				},
			]}
		/>
	</section>
	<section id="tech-stack-section">
		<header class="section-title">
			<ToolBoxLogo />
			<h3>{m.techstack_title_label()}</h3>
		</header>
		<TechStack />
	</section>
	<section id="blog-section" aria-label={m.latest_posts_aria()}>
		<header class="section-title">
			<BookOpenIcon />
			<h3>{m.latest_posts_label()}</h3>
		</header>
		<div id="latest-posts-container">
			{#each data.posts as post}
				<article class="post">
					<time class="post-preview-date">{post.prettyDate}</time>
					<a href={localizeHref(`/blog/${post.slug}`)}>
						{post.title}
					</a>
				</article>
			{/each}
			<article class="post">
				<time class="post-preview-date"
					>{m.latest_post_draft_date()}</time
				>
				<a href={localizeHref("/blog")}>
					{m.latest_post_draft_title()}
				</a>
			</article>
		</div>
	</section>
	<section id="contact-section">
		<header class="section-title">
			<EarthLogo />
			<h3>{m.home_contact_cta()}</h3>
		</header>

		<Button
			id="alternate-get-in-touch-button"
			href={localizeHref("/contact")}
			message={m.home_contact_cta_button()}
			icon={HandshakeLogo}
			iconPosition="right"
			backgroundColor="var(--theme-quaternary-colour)"
			hoverBackgroundColor="hsl(40, 85%, 78%);"
		/>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		height: 100%;
		gap: 70px;
		box-sizing: border-box;
		padding-bottom: 15vh;
		min-width: 0;

		h1 {
			color: var(--theme-text-colour);
			font-size: 2.5rem;
			margin: 30px 0 0 0;
		}

		.section-title {
			display: flex;
			gap: 5px;
			justify-content: center;
			align-items: center;
			font-size: 1.375rem;

			:global(svg) {
				color: var(--theme-primary-colour);
				width: 1.1em;
				height: 1.1em;
			}

			h3 {
				color: var(--theme-text-colour);
				font-size: inherit;
				margin: 0;
			}
		}

		#summary-education-block {
			header {
				:global(svg),
				h4 {
					color: var(--theme-secondary-colour);
				}
			}
		}

		#summary-location-block {
			header {
				:global(svg),
				h4 {
					color: var(--theme-tertiary-colour);
				}
			}
		}

		#summary-languages-block {
			header {
				:global(svg),
				h4 {
					color: var(--theme-quaternary-colour);
				}
			}

			ul {
				padding: 0;
				margin: 0;
				list-style: none;
			}
		}

		#summary-education-block,
		#summary-location-block,
		#summary-languages-block {
			header {
				display: flex;
				align-items: center;
				gap: 7px;
				margin-bottom: 12px;

				h4 {
					margin: 0;
					font-size: 1.125rem;
				}
			}

			h3,
			p {
				margin: 4px 0;
			}
		}

		p {
			font-size: 1rem;
		}

		#summary-education-level {
			font-weight: bold;
		}
	}

	#blog-section {
		#latest-posts-container {
			display: flex;
			flex-direction: column;
			align-self: center;

			.post {
				display: flex;
				gap: 15px;
				transition: transform 0.3s;
				flex-wrap: wrap;

				&:hover {
					transform: scale(1.03, 1.03);
				}

				a {
					color: white;
					text-decoration: underline;
				}

				time {
					color: var(--theme-secondary-colour);
				}

				a,
				time {
					font-size: 1.2rem;
				}
			}
		}
	}

	#landing-section {
		display: flex;
		align-items: center;
		img {
			width: 250px;
			height: 250px;
			border-radius: 20px;
		}
		h2 {
			color: var(--theme-primary-colour);
			font-size: 1.75rem;
		}
	}

	#contact-section {
		h3 {
			font-size: 1.375rem;
		}
	}

	:global(#alternate-get-in-touch-button) {
		align-self: center;
	}

	#buttons {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-top: 30px;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	@media (max-width: 600px) {
		main {
			width: 90%;
			padding-bottom: 5vh;
			gap: 50px;

			h1 {
				font-size: 1.75rem;
			}

			h2 {
				font-size: 1.25rem;
			}

			.section-title {
				font-size: 1.125rem;
			}

			#contact-section h3 {
				font-size: 1.125rem;
			}
		}

		#buttons {
			flex-wrap: wrap;
			gap: 15px;
		}
	}
</style>
