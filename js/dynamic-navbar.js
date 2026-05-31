window.addEventListener("DOMContentLoaded", () => {
    let currentPage = 1;

    const articleContainer = document.getElementById("container");
    const titleSection = document.querySelector("h1");
    const navbar = document.querySelectorAll("nav ul li ul li");
    const buttonLess = document.getElementById("buttonLess");
    const buttonMore = document.getElementById("buttonMore");

    const firstTitle = "First Title";
    const firstText = `Contrary to popular belief, Lorem Ipsum is not simply random text.
                       It has roots in a piece of classical Latin literature from 45 BC,
                       making it over 2000 years old. Richard McClintock,
                       a Latin professor at Hampden-Sydney College in Virginia,
                       looked up one of the more obscure Latin words, consectetur,
                       from a Lorem Ipsum passage, and going through the cites of the word in classical`;

    const secondTitle = "Second Title";
    const secondText = `Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock,
                        a Latin professor at Hampden-Sydney College in Virginia,
                        looked up one of the more obscure Latin words, consectetur,
                        from a Lorem Ipsum passage, and going through the cites of the word in classical`;

    const thirdTitle = "Three Title";
    const thirdText = `Contrary to popular belief, Lorem Ipsum is not simply random text.
                       It has roots in a piece of classical Latin literature from 45 BC,
                       making it over 2000 years old. Richard McClintock,
                       a Latin professor at Hampden-Sydney College in Virginia,
                       looked up one of the more obscure Latin words, consectetur,
                       from a Lorem Ipsum passage, and going through the cites of the word in classical`;
    
    // On déclare les liens dans un objet
    const tableLink = [
        {link1 : document.getElementById("1"), title: firstTitle, text : firstText},
        {link2 : document.getElementById("2"), title: secondTitle, text : secondText},
        {link3 : document.getElementById("3"), title: thirdTitle, text : thirdText}
    ]

    const tableDot = [
        {dot : 1, dotElement : document.getElementById("btnDotOne")},
        {dot : 2, dotElement : document.getElementById("btnDotTwo")},
        {dot : 3, dotElement : document.getElementById("btnDotThree")}
    ]

    // reset Index pour accéder aux tableau d'objet
    function resetIndex(nbs){
        return nbs - 1;
    }

    // function display 
    function updatePage(actualPage, newPage){
            articleContainer.innerHTML = `<h1> ${tableLink[resetIndex(newPage)].title} </h1>`;
            articleContainer.innerHTML += `<p> ${tableLink[resetIndex(newPage)].text} <p>`;
    }

    // fonction qui reset les class et attribue la class active
    function linkIsActive(link) {

        tableLink.forEach(item => {
            Object.values(item).forEach(value => {
                if (value instanceof HTMLElement) {
                    value.classList.remove("activetest");
                }
            });
        });

        document.getElementById(link)?.classList.add("activetest");
    }

    // On écoute les clics dans la navbar
    navbar.forEach(link => {
        link.addEventListener("click", () => {
            
            linkIsActive(link.id);

            if(currentPage !== link.id) {
                updatePage(currentPage, link.id);
            }

            currentPage = link.id;
            console.log(currentPage);
        });
    });

    // on écoute les dots dans la navigation de la page
    tableDot.forEach(item => {
        item.dotElement.addEventListener("click", () => {

            if(currentPage !== item.dot) {
                updatePage(currentPage, item.dot);
            }

            currentPage = item.dot;
            linkIsActive(currentPage);
            console.log(currentPage);
        });
    });


    // Clique sur le bouton gauche
    buttonLess.addEventListener("click", () => {
        if(currentPage > 1) {
            let newPageSelected = currentPage - 1

            if(currentPage !== newPageSelected) {
                updatePage(currentPage, newPageSelected);
            }

            currentPage = newPageSelected;
            linkIsActive(currentPage);
            console.log(currentPage);
        }
    });

    // Clique sur le bouton droite
    buttonMore.addEventListener("click", () => {
        if(currentPage < 3) {
            let newPageSelected = currentPage + 1

            if(currentPage !== newPageSelected) {
                updatePage(currentPage, newPageSelected);
            }

            currentPage = newPageSelected;
            linkIsActive(currentPage);
            console.log(currentPage);
        }
    });

    updatePage(currentPage, currentPage);
});

// update titre et paragraphe si currentPage change ? 
// Quand on clique on vérifie link.id si différent on update le titre