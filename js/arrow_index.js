// On récupère le bouton
const button = document.querySelector("button");

// on crée un objet des éléments à modifier
const elements = {
    background: document.querySelector(".background-effect"),
    title: document.querySelector("h1"),
    icon: document.querySelector("i"),
    main: document.querySelector("main"),
    paragraph: document.querySelector("p")
};

// varible pour état du bouton (cliqué ou pas)
let btnState = false;


//  On add la classe ".active" aux éléments
button.addEventListener("click", () => {

    if (btnState === false) {
        elements.background?.classList.add("active");
        elements.title?.classList.add("active");
        elements.icon?.classList.add("active");
        elements.main?.classList.add("active");
        elements.paragraph?.classList.add("active");

        btnState = true;
    } else {

        window.location.href = "../biscuit.html";
        btnState = false; // Reset après navigation
    }
});

// Sécurité : Vérifie si l'élément existe avant de manipuler
const check = (el, name) => console.log(`${name} trouvé?`, !!el);