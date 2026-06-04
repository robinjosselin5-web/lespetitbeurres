
export function getHeader(basePath = ".") {
        return `
        <nav>
            <a class="logo" href="#"><img src="${basePath}/img/logo.svg" alt="LU logo"></a>
            <ul class="menu">

            </ul>
            <a class="btn-about" href="#">About</a>
        </nav>
        `;
}