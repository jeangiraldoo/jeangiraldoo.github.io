const headerPath = "/partials/header/header.html"

fetch(headerPath)
	.then(response => response.text())
	.then(html => {
	document.body.insertAdjacentHTML("afterbegin", html);
});
