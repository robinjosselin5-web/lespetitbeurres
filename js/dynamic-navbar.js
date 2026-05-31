window.addEventListener("DOMContentLoaded", () => {
    let currentPage = 1;

    const titleSection = document.querySelector("h1");
    const navbar = document.querySelectorAll("nav ul li ul li");
    const buttonLess = document.getElementById("buttonLess")
    const buttonMore = document.getElementById("buttonMore")

    const firstTitle = "First Title";
    const secondTitle = "Second Title";
    const thirdTitle = "Three Title";
    
    // On déclare les liens dans un objet
    const tableLink = [
        {link1 : document.getElementById("1"), title: firstTitle},
        {link2 : document.getElementById("2"), title: secondTitle},
        {link3 : document.getElementById("3"), title: thirdTitle}
    ]

    // reset Index pour accéder aux tableau d'objet
    function resetIndex(nbs){
        return nbs - 1;
    }

    // function display 
    function updatePage(actualPage, newPage){
        if(actualPage !== newPage) {
            titleSection.innerHTML = tableLink[resetIndex(newPage)].title;
        }
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
            updatePage(currentPage, link.id);
            currentPage = link.id;
            console.log(currentPage);
        });
    });

    buttonLess.addEventListener("click", () => {
        if(currentPage > 1) {
            let newPageSelected = currentPage - 1
            updatePage(currentPage, newPageSelected);
            currentPage = newPageSelected;
            linkIsActive(currentPage);
            console.log(currentPage);
        }
    });

    buttonMore.addEventListener("click", () => {
        if(currentPage < 3) {
            let newPageSelected = currentPage + 1
            updatePage(currentPage, newPageSelected);
            currentPage = newPageSelected;
            linkIsActive(currentPage);
            console.log(currentPage);
        }
    });
    
    linkIsActive(currentPage);
});

// update titre et paragraphe si currentPage change ? 
// Quand on clique on vérifie link.id si différent on update le titre