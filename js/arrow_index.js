const button = document.querySelector("button");
const elements = {
    background: document.querySelector(".background-effect"),
    title: document.querySelector("h1"),
    icon: document.querySelector("i"),
    main: document.querySelector("main"),
    paragraph: document.querySelector("p")
};

//  On add la classe ".active" aux éléments
button.addEventListener("click", () => {
    elements.background?.classList.add("active");
    elements.title?.classList.add("active");
    elements.icon?.classList.add("active");
    elements.main?.classList.add("active");
    elements.paragraph?.classList.add("active");
});

// Sécurité : Vérifie si l'élément existe avant de manipuler
const check = (el, name) => console.log(`${name} trouvé?`, !!el);