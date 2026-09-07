<script lang="ts">
	import { m } from "$lib/paraglide/messages.js";
	import { localizeHref } from "$lib/paraglide/runtime";

	import TechStack from "$lib/components/TechStack.svelte";
	import Button from "$lib/components/Button.svelte";
	import BentoBox from "$lib/components/BentoBox.svelte";
	import Title from "$lib/components/Title.svelte";
	import BlogPreview from "$lib/components/BlogPreview.svelte";
	import ProjectsPreview from "$lib/components/ProjectsPreview.svelte";

	import CrownIcon from "@lucide/svelte/icons/crown";
	import BookOpenIcon from "@lucide/svelte/icons/book-open";
	import GraduationIcon from "@lucide/svelte/icons/graduation-cap";
	import GlobeIcon from "@lucide/svelte/icons/globe";
	import MapPinnedLogo from "@lucide/svelte/icons/map-pinned";
	import ToolBoxLogo from "@lucide/svelte/icons/toolbox";
	import EarthLogo from "@lucide/svelte/icons/earth";
	import HandshakeLogo from "@lucide/svelte/icons/handshake";
	import HammerIcon from "@lucide/svelte/icons/hammer";

	const totalPreviewPosts = 5;
</script>

<svelte:head>
	<title>Jean Giraldo</title>
</svelte:head>

{#snippet languages()}
	<div id="summary-languages-block">
		<header>
			<Title
				level={4}
				size="1.125rem"
				title={m.languages_label()}
				Icon={GlobeIcon}
				iconBackgroundColour="var(--theme-quaternary-colour)"
				colour="var(--theme-quaternary-colour)"
			/>
		</header>
		<ul>
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
			<Title
				level={4}
				size="1.125rem"
				title={m.education_label()}
				Icon={GraduationIcon}
				colour="var(--theme-secondary-colour)"
				iconBackgroundColour="var(--theme-secondary-colour)"
			/>
		</header>
		<h3 class="font-bold">
			{m.education_systems_degree()}
		</h3>
		<h3>{m.education_systems_date()}</h3>
		<h3>{m.education_systems_university()}</h3>
	</div>
{/snippet}

{#snippet location()}
	<div id="summary-location-block">
		<header>
			<Title
				level={4}
				size="1.125rem"
				title={m.location_label()}
				Icon={MapPinnedLogo}
				colour="var(--theme-tertiary-colour)"
				iconBackgroundColour="var(--theme-tertiary-colour)"
			/>
		</header>
		<p>{m.based_in_label()}</p>
		<p>{m.location_city_country()}</p>
	</div>
{/snippet}

<main
	class="w-3/4 max-lg:w-[90%] mx-auto flex flex-col justify-center text-center gap-18 max-sm:gap-12 h-full min-w-0 pb-[15vh] max-sm:pb-[5vh]"
>
	<section class="flex flex-col items-center">
		<img
			src="/images/profile.jpeg"
			alt="Jean Giraldo"
			class="size-64 rounded-2xl"
		/>
		<h1 class="text-white text-4xl mt-8 max-sm:text-3xl">Jean Giraldo</h1>
		<h2 class="text-primary text-3xl max-sm:text-xl">{m.job_title()}</h2>
		<div class="flex flex-wrap gap-4 mt-4">
			<Button
				href={localizeHref("/contact")}
				message={m.contact_me_home_button()}
				class="px-6 py-3 rounded-lg font-bold text-xl text-[var(--theme-bg-colour)] bg-[var(--theme-primary-colour)] transition-[transform,background-color] hover:scale-[1.035] hover:bg-[hsl(192,100%,78%)] [&_svg]:size-5"
			/>
			<Button
				href={localizeHref("/projects")}
				message={m.view_projects_home_button()}
				class="px-6 py-3 rounded-lg font-bold text-xl text-[var(--theme-bg-colour)] bg-[var(--theme-secondary-colour)] transition-[transform,background-color] hover:scale-[1.035] hover:bg-[hsl(166,92%,78%)] [&_svg]:size-5"
			/>
		</div>
	</section>
	<section>
		<Title
			level={3}
			size="1.375rem"
			title={m.summary_label()}
			Icon={CrownIcon}
			class="max-sm:text-lg"
		/>
		<BentoBox
			numCols={3}
			backgroundColour="rgba(255, 255, 255, 0.04)"
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
	<section>
		<Title
			level={3}
			size="1.375rem"
			title={m.techstack_title_label()}
			Icon={ToolBoxLogo}
			class="max-sm:text-lg"
		/>
		<TechStack />
	</section>
	<section>
		<Title
			level={3}
			size="1.375rem"
			title={"Featured projects"}
			Icon={HammerIcon}
			class="max-sm:text-lg"
		/>
		<ProjectsPreview max={3} onlyFeatured={true} />
	</section>
	<section aria-label={m.latest_posts_aria()}>
		<Title
			level={3}
			size="1.375rem"
			title={m.latest_posts_label()}
			Icon={BookOpenIcon}
			class="max-sm:text-lg"
		/>
		<BlogPreview totalPosts={totalPreviewPosts} layout="line" />
	</section>
	<section>
		<Title
			level={3}
			size="1.375rem"
			title={m.home_contact_cta()}
			Icon={EarthLogo}
			class="max-sm:text-lg"
		/>

		<Button
			class="self-center px-6 py-3 rounded-lg font-bold text-xl text-[var(--theme-bg-colour)] bg-[var(--theme-quaternary-colour)] transition-[transform,background-color] hover:scale-[1.035] hover:bg-[hsl(40,85%,78%)] [&_svg]:size-5"
			href={localizeHref("/contact")}
			message={m.home_contact_cta_button()}
			icon={HandshakeLogo}
			iconPosition="right"
		/>
	</section>
</main>

<style>
	#summary-education-block,
	#summary-location-block,
	#summary-languages-block {
		header {
			display: flex;
			align-items: center;
			gap: 7px;
			margin-bottom: 12px;
		}

		h3,
		p {
			margin: 4px 0;
		}
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
</style>
