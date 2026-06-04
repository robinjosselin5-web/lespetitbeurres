export function getHeader(basePath = ".") {
        return `
        <nav>
            <a class="logo" href="./../biscuit.html"><img src="${basePath}/img/logo.svg" alt="LU logo"></a>
            <button class="menu-toggle">
                <i class="fa-solid fa-bars"></i>
            </button>
            <ul class="menu">

             </ul> 
            <a class="btn-about" href="#">About</a>
        </nav>
        `;
}