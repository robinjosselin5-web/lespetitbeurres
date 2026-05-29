// HEAD - head.js module - You have to import this file on your page
// Use : 
//        <script type="module">
//            import { head } from './modules/head.js';
//
//            document.head.innerHTML += head;
//        </script>

export const head = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        document.title = "Les petits beurres";
        
        <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/index.css">

`;