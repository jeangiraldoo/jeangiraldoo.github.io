<script lang="ts">
	import projects from './data.json';
</script>

<style>
main {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 40px auto;
}

.project-header {
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  align-items: center;
}

.project-header a {
  color: #393799;
}

#projects-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project {
  box-sizing: border-box;
  display: flex;
  gap: 2%;
  padding: 2%;
  margin: 0;
  background-color: #b4cae0;
  width: 100%;
  border-radius: 10px;
}

.project img {
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
}

.project-stack p {
  background-color: #8dd9a1;
  padding: 5px 10px;
  border-radius: 3px;
  text-align: center;
  margin: 0;
}

@media (max-width: 768px) {
  main {
    width: 90%;
    max-width: 415px;
  }

  h2 {
    font-size: 20px;
  }

  .project {
    display: block;
  }

  .project-description {
    font-size: 14px;
  }

  .project-stack p {
    font-size: 10px;
  }

  .project img {
    width: 100%;
    max-width: 100%;
    max-height: 30vh;
  }
}
</style>

<main>
	<div id="projects-container">
		{#each projects as project}
			<article class="project">
				<img src={project.image_path} alt={project.name} />

				<div class="project-info">
					<header class="project-header">
						<h2>{project.name}</h2>

						{#if project.source_code}
							<a href={project.source_code}>- Code</a>
						{/if}
					</header>

					<p class="project-description">
						{project.description}
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
