window.addEventListener("DOMContentLoaded", () => {
    let currentPage = 1;

    const titleSection = document.querySelector("h1");

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
    document.querySelectorAll("nav ul li ul li").forEach(link => {
        link.addEventListener("click", () => {
            
            linkIsActive(link.id);

            if(currentPage !== link.id) {
                 titleSection.innerHTML = tableLink[resetIndex(link.id)].title;
                 currentPage = Number(link.id);
            }
        });
    });
    
    linkIsActive(currentPage);
});

// update titre et paragraphe si currentPage change ? 
// Quand on clique on vérifie link.id si différent on update le titre