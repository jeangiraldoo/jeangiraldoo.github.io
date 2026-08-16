<svelte:head>
	<title>Jean Giraldo</title>
</svelte:head>

<main id="personal-info">
  <img src="/images/profile.jpeg" alt="Jean Giraldo" />
  <h1>Jean Giraldo</h1>
  <h2>Fullstack Software Developer</h2>
  <div id="buttons">
    <a id="get-in-touch" href="/contact">Get in touch</a>
    <a id="view-projects" href="/projects">View my projects</a>
  </div>
</main>

<style>
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

#buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

#get-in-touch,
#view-projects {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 1.25rem;
  font-weight: bold;
}

#get-in-touch {
  background-color: var(--theme-primary-colour);
  color: var(--theme-bg-colour);
}

#get-in-touch:hover {
  background-color: hsl(192, 100%, 78%);
}

#view-projects {
  background-color: var(--theme-secondary-colour);
  color: var(--theme-bg-colour);
}

#view-projects:hover {
  background-color: hsl(166, 92%, 78%);
}

#personal-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 15vh;
}

@media (max-width: 768px) {
  main {
    width: 90%;
  }

  #buttons {
    flex-wrap: wrap;
  }

  #personal-info {
    padding-bottom: 5vh;
  }
}
</style>
