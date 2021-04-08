// Fonction déclenchée par le boutton qui lance la requête AJAX
function loadContent() {
    // Objet pour envoyer et manipuler des requêtes
    let httpRequest = new XMLHttpRequest();
    // Fonction déclenchée à chaque changement d'état de la requête
    httpRequest.onreadystatechange = function() {
        let ajaxContent = document.getElementById("msg");
        // Quand la réponse du serveur a été reçue
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // Si la réponse est valide
            if (httpRequest.status === 200) {
                let data = httpRequest.responseText;
                ajaxContent.innerText = data;
            } 
            // Si une erreur est survenue (exemple un fichier qui n'existe pas)
            else {
                ajaxContent.innerText = "Nous n'avons pas réussi à récupérer le contenu";
            }
        } 
        // Le serveur n'a pas encore répondu
        else {
            ajaxContent.innerText = "Requête en cours";
        }
    };
    // On envoie la requête
    httpRequest.open('GET', 'messageSecu.txt', true);
    httpRequest.send();
};

