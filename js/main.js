fetch("../data/skills.json")
	.then(response => response.json())
	.then(data => {
	const skillsContainer = document.getElementById("skills")
	data.forEach( ({name, logo}) => {
		const article = document.createElement("article")
		const image = document.createElement("img")
		const paragraph = document.createElement("p")

		image.src = logo;
		paragraph.innerText = name

		article.appendChild(image)
		article.appendChild(paragraph)
		skillsContainer.appendChild(article)
	})
  })
  .catch(error => console.error('Error loading the JSON file:', error));
