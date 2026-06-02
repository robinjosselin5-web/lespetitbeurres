
export function getHeader(basePath = ".") {
        return `
        <nav>
            <img src="${basePath}/img/logo.svg" alt="logo">
            <ul class="menu">
                <li><a data-text="Thèmes 1" href="#">Thèmes 1</a></li>
                <li class="active"><a data-text="Thèmes 2" href="#">Thèmes 2</a></li>
                <li class="dot-nav">
                    <i id="1" class="fa-solid fa-circle active"></i>
                    <span></span>
                    <i id="2" class="fa-solid fa-circle-dot"></i>
                    <span></span>
                    <i id="3" class="fa-solid fa-circle-dot"></i>
                </li>
                <li><a data-text="Thèmes 3" href="#">Thèmes 3</a></li>
                <li><a data-text="Thèmes 4" href="#">Thèmes 4</a></li>
            </ul>
            <a class="btn-about" href="#">About</a>
        </nav>
        `;
}