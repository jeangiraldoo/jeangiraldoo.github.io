const generateSkillsGrid = () => {
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
};

const generateProjectsSection = () => {
	fetch("../data/projects.json")
	.then(response => response.json())
	.then(data => {
	const projectsContainer = document.getElementById("projects-container")
	var counter = 0
	const projectsPerRow = 2
	data.forEach( ({name, stack, description, github}) => {
		const projectContainer = document.createElement("div")
		projectContainer.classList.add("project")

		const header = getHeaderDiv(name)
		const stackContainer = getStackDiv(stack)
		const descriptionContainer = getDescriptionDiv(description)
		const footer = getFooterDiv(github)

		projectContainer.appendChild(header)
		projectContainer.appendChild(stackContainer)
		projectContainer.appendChild(descriptionContainer)
		projectContainer.appendChild(footer)
		projectsContainer.appendChild(projectContainer)
		counter = counter + 1
	})
  })
  .catch(error => console.error('Error loading the JSON file:', error));
};

const getHeaderDiv = (name) => {
	const container = document.createElement("div")
	container.classList.add("project-header")
	const projectName = document.createElement("p")
	projectName.innerText = name
	container.appendChild(projectName)
	return container
};

const getStackDiv = (stack) => {
	const techStack = {
					"Python": "assets/python.svg",
				    "Javascript": "assets/javascript.svg",
				    "React": "assets/react-native.svg",
				   	"SQLite": "assets/sqlite.svg",
					"Lua": "assets/lua.svg",
					"PySide6": "assets/QT.svg"
				}

	const container = document.createElement("div")
	container.classList.add("project-stack")
	stack.forEach( (name) => {
		const stackInstanceContainer = document.createElement("div")
		const techImage = document.createElement("img")
		const techName = document.createElement("p")
		techName.innerText = name
		url = techStack[name]
		console.log(url)
		techImage.src = url
		stackInstanceContainer.appendChild(techImage)
		stackInstanceContainer.appendChild(techName)
		container.appendChild(stackInstanceContainer)
	})
	return container
};

const getDescriptionDiv = (description) => {
	const container = document.createElement("div")
	const descriptionText = document.createElement("p")
	container.classList.add("project-description")
	descriptionText.innerText = description
	container.appendChild(descriptionText)
	return container
};

const getFooterDiv = (github) => {
	const container = document.createElement("div")
	container.classList.add("project-footer")
	const innerContainer = document.createElement("div")
	console.log(github)
	if (github) {
		const link = document.createElement("a")
		const linkText = document.createElement("p")
		linkText.innerText = "View Github"
		link.href = github
		link.appendChild(linkText)
		innerContainer.appendChild(link)
	}

	container.appendChild(innerContainer)
	return container
};

generateSkillsGrid()
generateProjectsSection()
