// HEAD - head.js module - You have to import this file on your page
// Use : 
//        <script type="module">
//            import { head } from './modules/head.js';
//
//            document.head.innerHTML += head;
//        </script>

export function getHead(basePath = ".") {
    return `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="${basePath}/css/reset.css">
        <link rel="stylesheet" href="${basePath}/css/style.css">
        <link rel="stylesheet" href="${basePath}/css/index.css">
        <link rel="stylesheet" href="${basePath}/css/biscuit.css">
        <link rel="stylesheet" href="${basePath}/css/template-themes.css">
        <link rel="stylesheet" href="${basePath}/css/footer.css">
        <link rel="stylesheet" href="${basePath}/css/navbar.css">
        <link rel="stylesheet" href="${basePath}/css/landscape.css">
        <link rel="stylesheet" href="${basePath}/css/mobile.css">
    `;
}
 