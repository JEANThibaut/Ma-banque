// Fonction déclenchée par le boutton qui lance la requête AJAX
function loadContent() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        let ajaxContent = document.getElementById("msg");
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let data = httpRequest.responseText;
                ajaxContent.innerText = data;
            } 
            else {
                ajaxContent.innerText = "Nous n'avons pas réussi à récupérer le contenu";
            }
        } 
        else {
            ajaxContent.innerText = "Requête en cours";
        }
    };
    // On envoie la requête
    httpRequest.open('GET', 'messageSecu.txt', true);
    httpRequest.send();
};
