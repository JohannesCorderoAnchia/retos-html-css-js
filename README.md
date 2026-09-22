# Retos Frontend: HTML5, CSS3 & JavaScript

Colección de proyectos y retos prácticos de desarrollo frontend construidos con **HTML5 semántico**, **CSS3 moderno** y **JavaScript vanilla (ES6+)**, incluyendo consumo de APIs REST, manipulación del DOM y diseño responsive.

---

## Proyectos Incluidos

| # | Proyecto | Descripción | Tecnologías / APIs |
|---|---|---|---|
| 1 | [Pokédex](./pokedex/) | Pokédex interactiva con carga dinámica de los primeros 151 Pokémon y filtrado por tipos. | HTML5, CSS3, JS Vanilla, [PokéAPI](https://pokeapi.co/) |
| 2 | [Disney Character Generator](./disney-pics-generator/) | Generador aleatorio de personajes de Disney con imagen y nombre. | HTML5, CSS3, JS Vanilla, [Disney API](https://disneyapi.dev/) |
| 3 | [Calculadora](./calculator/) | Calculadora interactiva con operaciones aritméticas básicas, decimales y borrado. | HTML5, CSS3 Grid/Flexbox, JS Vanilla |
| 4 | [Generador de Contraseñas](./random-password-generator/) | Generador de contraseñas seguras y aleatorias con opción rápida de copiado. | HTML5, CSS3, JS Vanilla |
| 5 | [To-Do List](./to-do-list/) | Aplicación de lista de tareas con funciones para agregar, completar y eliminar ítems. | HTML5, CSS3, DOM Manipulation, LocalStorage |

---

## Tecnologías y Conceptos Aplicados

- **HTML5:** Marcado semántico, accesibilidad básica y buenas prácticas de estructura.
- **CSS3:** Flexbox, CSS Grid, diseño responsivo (`media queries`), animaciones, transiciones y variables CSS.
- **JavaScript (ES6+):**
  - Manipulación y recorrido del DOM.
  - Consumo de APIs REST mediante `fetch()` y funciones asíncronas (`async/await`, `Promise.all`).
  - Manejo de eventos (`click`, `input`, delegación de eventos).
  - Métodos funcionales de arrays (`map`, `filter`, `forEach`).
  - Persistencia de datos en el cliente con `localStorage`.

---

## Estructura del Repositorio

```text
retos-html-css-js/
├── calculator/
│   ├── index.html
│   ├── index.js
│   └── style.css
├── disney-pics-generator/
│   ├── index.html
│   ├── index.js
│   └── style.css
├── pokedex/
│   ├── assets/
│   ├── index.html
│   ├── index.js
│   └── style.css
├── random-password-generator/
│   ├── index.html
│   ├── index.js
│   └── style.css
└── to-do-list/
    ├── index.html
    ├── index.js
    └── style.css
