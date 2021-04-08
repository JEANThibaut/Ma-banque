function news() {
  
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        let mainTitle = document.getElementsByClassName("mainTitle");
        let secondTitle = document.getElementsByClassName("secondTitle");
        let text = document.getElementsByClassName("text");
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let data = JSON.parse(httpRequest.responseText);
                for (i=0;i<data.length;i++){
                mainTitle[i].innerText = `Id : ${data[i].id}`;
                secondTitle[i].innerText = `titre : ${data[i].titre}`;
                text[i].innerText = `contenu :  ${data[i].contenu}`;
                }
            } 
            else {
                mainTitle.innerText = "Nous n'avons pas réussi à récupérer le contenu";
            }
        } 
        else {
            mainTitle.innerText = "Requête en cours";
        }
    };

    httpRequest.open('GET', 'https://oc-jswebsrv.herokuapp.com/api/articles', true);
    httpRequest.send();
}