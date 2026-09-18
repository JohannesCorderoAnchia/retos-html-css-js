const btnEl = document.getElementById("btn");
const disneyContainerEl = document.querySelector(".disney-container");
const characterImgEl = document.getElementById("character-img");
const characterNameEl = document.getElementById("character-name");

async function getRandomCharacter() {
    try {
        disneyContainerEl.style.display = "block";
        btnEl.disabled = true;
        btnEl.innerText = "Cargando...";
        characterNameEl.innerText = "Buscando personaje...";

        const randomPage = Math.floor(Math.random() * 149) + 1;
        const response = await fetch(`https://api.disneyapi.dev/character?page=${randomPage}&pageSize=20`);
        const data = await response.json();

        const charactersWithImage = data.data.filter(char => char.imageUrl);

        if (charactersWithImage.length > 0) {
            const randomIndex = Math.floor(Math.random() * charactersWithImage.length);
            const character = charactersWithImage[randomIndex];

            characterImgEl.src = character.imageUrl;
            characterNameEl.innerText = character.name;
        } else {
            getRandomCharacter();
            return;
        }
    } catch (error) {
        console.error("Error al obtener personaje:", error);
        characterNameEl.innerText = "Ocurrió un error. Intenta de nuevo.";
    } finally {
        btnEl.disabled = false;
        btnEl.innerText = "Get Disney Character";
    }
}

btnEl.addEventListener("click", getRandomCharacter);

getRandomCharacter();