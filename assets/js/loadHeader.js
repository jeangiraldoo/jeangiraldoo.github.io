const headerPath = "/partials/header/header.html"

fetch(headerPath)
	.then(response => response.text())
	.then(html => {
	document.body.insertAdjacentHTML("afterbegin", html);

	const current_theme = localStorage.getItem("jeangiraldooTheme")
	if (!current_theme) {
		localStorage.setItem("jeangiraldooTheme", "dark-mode")
	} else {
		document.body.classList.add(current_theme);
	}

	const btn = document.getElementById("theme-toggle")

	btn.addEventListener("click", () => {
		document.body.classList.toggle("light-mode");
		if (document.body.classList.contains("light-mode")) {
			localStorage.setItem("jeangiraldooTheme", "light-mode")
		} else {
			localStorage.setItem("jeangiraldooTheme", "dark-mode")
		}
	});

});
