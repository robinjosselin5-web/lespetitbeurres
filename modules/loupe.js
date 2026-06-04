const section = document.querySelector(".bibi");
const image   = document.querySelector(".biscuit");

// Init au chargement
if (image.complete) {
    init();
} else {
    image.addEventListener("load", init);
}

// ResizeObserver sur le biscuit — se déclenche APRÈS que l'image a vraiment changé de taille
const resizeObserver = new ResizeObserver(function() {
    init();
});
resizeObserver.observe(image);

function init() {
    positionThemes();
    createCanvasForThemes();
}

function positionThemes() {
    image.classList.add("measuring");
    image.getBoundingClientRect();

    const sectionRect = section.getBoundingClientRect();
    const imgRect     = image.getBoundingClientRect();

    image.classList.remove("measuring");

    const bTop  = imgRect.top  - sectionRect.top;
    const bLeft = imgRect.left - sectionRect.left;
    const bW    = imgRect.width;
    const bH    = imgRect.height;

    const themes = document.querySelectorAll(".bibi a");

    themes.forEach(function (theme) {
        const tW = bW / 2;
        const tH = bH / 2;

        theme.style.width  = `${tW}px`;
        theme.style.height = `${tH}px`;

        let top, left;

        if (theme.classList.contains("theme1")) {
            top  = bTop  - tH * 0;
            left = bLeft - tW * -0.4;
        }
        if (theme.classList.contains("theme2")) {
            top  = bTop  - tH * 0;
            left = bLeft + bW - tW * 0.6;
        }
        if (theme.classList.contains("theme3")) {
            top  = bTop  + bH - tH * 0.8;
            left = bLeft + bW - tW * 0.5;
        }
        if (theme.classList.contains("theme4")) {
            top  = bTop  + bH - tH * 0.8;
            left = bLeft - tW * -0.4;
        }

        theme.style.top    = `${top}px`;
        theme.style.left   = `${left}px`;
        theme.style.margin = "0";
    });
}

function createCanvasForThemes() {
    const themes = document.querySelectorAll(".bibi a");
    const size = getSize();

    const cutW = size.width / 2;
    const cutH = size.height / 2;
    const cutSize = Math.min(cutW, cutH);

    themes.forEach(function (theme) {
        const oldLens = theme.querySelector(".lens");
        if (oldLens) oldLens.remove();
        const oldIcon = theme.querySelector("i");
        if (oldIcon) oldIcon.remove();

        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-magnifying-glass");
        theme.appendChild(icon);

        theme.classList.add("force-hover-size");

        const themeRect = theme.getBoundingClientRect();
        const iconRect  = icon.getBoundingClientRect();
        const fontSize  = parseFloat(getComputedStyle(icon).fontSize);

        const circleSize = fontSize * 0.64;

        let circleLeftRatio = 0.09;
        let circleTopRatio  = 0.06;

        if (theme.classList.contains("theme1")) { circleLeftRatio = 0.2;  circleTopRatio =  0.0;   }
        if (theme.classList.contains("theme2")) { circleLeftRatio = 0.2;  circleTopRatio = -0.005; }
        if (theme.classList.contains("theme3")) { circleLeftRatio = 0.2;  circleTopRatio =  0.0;   }
        if (theme.classList.contains("theme4")) { circleLeftRatio = 0.2;  circleTopRatio =  0.01;  }

        const circleLeft = (iconRect.left - themeRect.left) + fontSize * circleLeftRatio;
        const circleTop  = (iconRect.top  - themeRect.top)  + fontSize * circleTopRatio;

        theme.classList.remove("force-hover-size");

        const canvas = document.createElement("canvas");
        canvas.width  = cutSize;
        canvas.height = cutSize;

        const ctx = canvas.getContext("2d");

        let sx = 0;
        let sy = 0;
        if (theme.classList.contains("theme1")) { sx = 0;    sy = 0;    }
        if (theme.classList.contains("theme2")) { sx = cutW; sy = 0;    }
        if (theme.classList.contains("theme3")) { sx = cutW; sy = cutH; }
        if (theme.classList.contains("theme4")) { sx = 0;    sy = cutH; }

        const quadCenterX = sx + cutW / 2;
        const quadCenterY = sy + cutH / 2;
        const srcX = quadCenterX - cutSize / 2;
        const srcY = quadCenterY - cutSize / 2;

        ctx.drawImage(
            image,
            srcX, srcY, cutSize, cutSize,
            0, 0, canvas.width, canvas.height
        );

        const lens = document.createElement("span");
        lens.classList.add("lens");
        lens.style.width  = `${circleSize / fontSize}em`;
        lens.style.height = `${circleSize / fontSize}em`;
        lens.style.top    = `${circleTop  / fontSize}em`;
        lens.style.left   = `${circleLeft / fontSize}em`;
        lens.appendChild(canvas);

        theme.appendChild(lens);
    });
}

function getSize() {
    return {
        width:  image.naturalWidth,
        height: image.naturalHeight
    };
}