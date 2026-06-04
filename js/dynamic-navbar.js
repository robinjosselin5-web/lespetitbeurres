window.addEventListener("DOMContentLoaded", async () => {

    const theme = document.body.dataset.theme;

    const knownThemes = ["themesOne", "themesTwo", "themesThree", "themesFour"];
    const hasTheme = knownThemes.includes(theme);

    // Only import theme content if a valid theme is set
    const content = hasTheme
        ? (await import(`../js/themes_content/${theme}.js`)).content
        : null;

    let currentPage = 1;

    const articleContainer = document.getElementById("container");
    const buttonLess = document.getElementById("buttonLess");
    const buttonMore = document.getElementById("buttonMore");
    const mainBackground = document.querySelector("main");
    const menu = document.querySelector("ul");


    const toggle = document.querySelector(".menu-toggle");
    const menuToggle = document.querySelector(".menu");

    toggle.addEventListener("click", () => {
        menuToggle.classList.toggle("open");
    });

    // --- Inject navbar ---
    // The dot-nav <i> ids "1","2","3" only exist after this block,
    // so tableLink / navbar must be built AFTER the injection below.

    if (theme === "themesOne") {
        menu.innerHTML += `
            <li class="active"><a data-text="Histoire" href="history.html">Histoire</a></li>
            <li class="dot-nav">
                <i id="1" class="fa-solid fa-circle active"></i>
                <span></span>
                <i id="2" class="fa-solid fa-circle-dot"></i>
                <span></span>
                <i id="3" class="fa-solid fa-circle-dot"></i>
            </li>
            <li><a data-text="Entreprise" href="entreprise.html">Entreprise</a></li>
            <li><a data-text="Innovation" href="innovation.html">Innovation</a></li>
            <li><a data-text="Marketing" href="marketing.html">Marketing</a></li>`;
    }
    else if (theme === "themesTwo") {
        menu.innerHTML += `
            <li><a data-text="Histoire" href="history.html">Histoire</a></li>
            <li><a data-text="Entreprise" href="entreprise.html">Entreprise</a></li>
            <li class="dot-nav">
                <i id="1" class="fa-solid fa-circle active"></i>
                <span></span>
                <i id="2" class="fa-solid fa-circle-dot"></i>
                <span></span>
                <i id="3" class="fa-solid fa-circle-dot"></i>
            </li>
            <li><a data-text="Innovation" href="innovation.html">Innovation</a></li>
            <li><a data-text="Marketing" href="marketing.html">Marketing</a></li>`;
    }
    else if (theme === "themesThree") {
        menu.innerHTML += `
            <li><a data-text="Histoire" href="history.html">Histoire</a></li>
            <li><a data-text="Entreprise" href="entreprise.html">Entreprise</a></li>
            <li><a data-text="Innovation" href="innovation.html">Innovation</a></li>
            <li class="dot-nav">
                <i id="1" class="fa-solid fa-circle active"></i>
                <span></span>
                <i id="2" class="fa-solid fa-circle-dot"></i>
                <span></span>
                <i id="3" class="fa-solid fa-circle-dot"></i>
            </li>
            <li><a data-text="Marketing" href="marketing.html">Marketing</a></li>`;
    }
    else if (theme === "themesFour") {
        menu.innerHTML += `
            <li><a data-text="Histoire" href="history.html">Histoire</a></li>
            <li><a data-text="Entreprise" href="entreprise.html">Entreprise</a></li>
            <li><a data-text="Innovation" href="innovation.html">Innovation</a></li>
            <li><a data-text="Marketing" href="marketing.html">Marketing</a></li>
            <li class="dot-nav">
                <i id="1" class="fa-solid fa-circle active"></i>
                <span></span>
                <i id="2" class="fa-solid fa-circle-dot"></i>
                <span></span>
                <i id="3" class="fa-solid fa-circle-dot"></i>
            </li>`;
    }
    else {
        // No theme: render a plain nav without dot navigation
        menu.innerHTML += `
            <li><a data-text="Histoire" href="/themes/history.html">Histoire</a></li>
            <li><a data-text="Entreprise" href="/themes/entreprise.html">Entreprise</a></li>
            <li><a data-text="Innovation" href="/themes/innovation.html">Innovation</a></li>
            <li><a data-text="Marketing" href="/themes/marketing.html">Marketing</a></li>`;

        // Hide the dot-navigation section in the page since there's nothing to paginate
        const dotNavigation = document.querySelector(".dot-navigation");
        if (dotNavigation) dotNavigation.style.display = "none";

        // Nothing else to initialise — stop here
        return;
    }

    // --- From here on, we are guaranteed to have a valid theme ---

    // Now that the navbar HTML is in the DOM, ids "1","2","3" resolve correctly
    const navbar = document.querySelectorAll("nav ul li i");

    const tableLink = [
        {
            link: document.getElementById("1"),
            title: content.firstTitle,
            text: content.firstText,
            img: content.firstBackground
        },
        {
            link: document.getElementById("2"),
            title: content.secondTitle,
            text: content.secondText,
            img: content.secondBackground
        },
        {
            link: document.getElementById("3"),
            title: content.thirdTitle,
            text: content.thirdText,
            img: content.thirdBackground
        }
    ];

    const tableDot = [
        { dotElement: document.getElementById("btnDotOne"), dot: 1 },
        { dotElement: document.getElementById("btnDotTwo"), dot: 2 },
        { dotElement: document.getElementById("btnDotThree"), dot: 3 }
    ];

    // Converts 1-based page number to 0-based array index
    function resetIndex(nbs) {
        return nbs - 1;
    }

    // Update article content and background
    function updatePage(actualPage, newPage) {
        articleContainer.innerHTML  = `<h2 class="animate__animated animate__fadeIn">${tableLink[resetIndex(newPage)].title}</h2>`;
        articleContainer.innerHTML += `<p class="animate__animated animate__fadeIn">${tableLink[resetIndex(newPage)].text}</p>`;
        mainBackground.style.backgroundImage = tableLink[resetIndex(newPage)].img;
    }

    // Reset all dots, then mark the active one
    function linkIsActive(nbs) {

        // Reset navbar dots
        tableLink.forEach(item => {
            Object.values(item).forEach(value => {
                if (value instanceof HTMLElement) {
                    value.classList.remove("active", "fa-circle");
                    value.classList.add("fa-circle-dot");
                }
            });
        });

        // Reset page dots
        tableDot.forEach(item => {
            Object.values(item).forEach(value => {
                if (value instanceof HTMLElement) {
                    value.classList.remove("active", "fa-circle");
                    value.classList.add("fa-circle-dot");
                }
            });
        });

        // Activate the correct navbar dot
        tableLink[resetIndex(nbs)].link.classList.add("fa-circle", "active");
        tableLink[resetIndex(nbs)].link.classList.remove("fa-circle-dot");

        // Activate the correct page dot
        tableDot[resetIndex(nbs)].dotElement.classList.add("fa-circle", "active");
        tableDot[resetIndex(nbs)].dotElement.classList.remove("fa-circle-dot");
    }

    // Navbar dot clicks
    navbar.forEach(link => {
        link.addEventListener("click", () => {
            const pageId = parseInt(link.id, 10);

            if (currentPage !== pageId) {
                updatePage(currentPage, pageId);
            }

            currentPage = pageId;
            linkIsActive(currentPage);
        });
    });

    // Page dot clicks
    tableDot.forEach(item => {
        item.dotElement.addEventListener("click", () => {
            if (currentPage !== item.dot) {
                updatePage(currentPage, item.dot);
            }

            currentPage = item.dot;
            linkIsActive(currentPage);
        });
    });

    // Left arrow
    buttonLess.addEventListener("click", () => {
        if (currentPage > 1) {
            const newPageSelected = currentPage - 1;
            updatePage(currentPage, newPageSelected);
            currentPage = newPageSelected;
            linkIsActive(currentPage);
        }
    });

    // Right arrow
    buttonMore.addEventListener("click", () => {
        if (currentPage < 3) {
            const newPageSelected = currentPage + 1;
            updatePage(currentPage, newPageSelected);
            currentPage = newPageSelected;
            linkIsActive(currentPage);
        }
    });

    updatePage(currentPage, currentPage);
});