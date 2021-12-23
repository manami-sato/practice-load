{

	let screen = 2;
	// practice-load-1.cssだと2
	// practice-load-2.cssだと3

	const loadAnimeWrap = document.createElement("div");
	loadAnimeWrap.classList.add("loadAnimeWrap");
	const main = document.querySelector("main");
	main.appendChild(loadAnimeWrap);
	for (let i = 0; i < screen; i++) {
		const loadAnime = document.createElement("div");
		loadAnime.classList.add("loadAnime");
		loadAnimeWrap.appendChild(loadAnime);
		const lastAnime = document.querySelector(".loadAnime:last-child");
		lastAnime.addEventListener('animationend', () => {
			main.removeChild(loadAnimeWrap);
		});
	}

}