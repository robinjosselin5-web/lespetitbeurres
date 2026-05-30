
export function getHeader(basePath = ".") {
        return `
        <nav>
            <ul>
                <li><a href="#">Accueil</a></li>

                <li>
                    <a href="#">Theme 1</a>
                    <ul>
                        <li id="1"><a href="#">Page 1</a></li>
                        <li id="2"><a href="#">Page 2</a></li>
                        <li id="3"><a href="#">Page 3</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        `;
}