window.addEventListener("DOMContentLoaded", async () => {

    const theme = document.body.dataset.theme;;

    const { content } = await import(`./themes_content/${theme}.js`);

    let currentPage = 1;

    const articleContainer = document.getElementById("container");
    const titleSection = document.querySelector("h1");
    const navbar = document.querySelectorAll("nav ul li i");
    const buttonLess = document.getElementById("buttonLess");
    const buttonMore = document.getElementById("buttonMore");

    const tableLink = [
        {
            link: document.getElementById("1"),
            title: content.firstTitle,
            text: content.firstText
        },
        {
            link: document.getElementById("2"),
            title: content.secondTitle,
            text: content.secondText
        },
        {
            link: document.getElementById("3"),
            title: content.thirdTitle,
            text: content.thirdText
        }
    ];

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
            articleContainer.innerHTML = `<h1 class="animate__animated animate__fadeIn"> ${tableLink[resetIndex(newPage)].title} </h1>`;
            articleContainer.innerHTML += `<p class="animate__animated animate__fadeIn"> ${tableLink[resetIndex(newPage)].text} <p>`;
    }

    // fonction qui reset les class et attribue la class active
    function linkIsActive(link) {

        tableLink.forEach(item => {
            Object.values(item).forEach(value => {
                if (value instanceof HTMLElement) {
                    value.classList.remove("active");
                    value.classList.remove("fa-circle");
                    value.classList.add("fa-circle-dot");
                }
            });
        });

        document.getElementById(link)?.classList.add("fa-circle");
        document.getElementById(link)?.classList.remove("fa-circle-dot");
        document.getElementById(link)?.classList.add("active");

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