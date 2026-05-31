
// Use : -- Replace "moduleName" by Your and import it on your html page
//
//        <script type="module">
//            import { footer } from './modules/footer.js';
//
//            document.footer.innerHTML += footer;
//        </script>


// Replace "moduleName" by Your
export function getFooter(basePath = ".") {
        return `

        <section id="footer-brand">

                <a href="/" id="logo">
                <img src="img/footer/logo.svg" alt="LU">
                </a>

                <ul id="social">
                        <li><a href="#"><img src="img/footer/facebook.png" alt="Facebook"/></a></li>
                        <li><a href="#"><img src="img/footer/youtube.png" alt="YouTube"/></a></li>
                        <li><a href="#"><img src="img/footer/instagram.png" alt="Instagram"/></a></li>
                        <li><a href="#"><img src="img/footer/email.png" alt="Newsletter"/></a></li>
                </ul>

                <a href="#" id="bouton">Rejoindre notre communauté</a>

        </section>

        <nav id="legal">
                <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Mentions légales</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                        <li><a href="#">Paramètres cookies</a></li>
                        <li><a href="#">Conditions générales d'utilisation</a></li>
                </ul>
        </nav>

        <section id="mentions">
                <p class="sante">
                        Pour votre santé, mangez au moins cinq fruits et légumes par jour.
                        <a href="https://www.mangerbouger.fr">www.mangerbouger.fr</a>
                </p>
                
                <p class="copyright">
                        &copy; 2026 lespetitsbeurres - All Right Reserved
                </p>
        </section>

        `;
} 