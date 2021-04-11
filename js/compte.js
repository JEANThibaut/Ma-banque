function compte() {
    let httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange = function() {
        
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let data = JSON.parse(httpRequest.responseText);
                let section= document.querySelector('section');
                console.log(data);
                for (i=0;i<data.length;i++){
                    console.log(section)
                    section.innerHTML += '<article><div class="card"><div class="card-header">' + data[i].Nom + '</div><div class="card-body"><h5 class="card-title">' + data[i].Type + '</h5><p class="card-text">' + data[i].Depot + " €"  + '</p><a href="#" class="btn btn-primary">Voir la page</a></div></div></article>'
                }
            } 
            else {
                section.innerText = "Nous n'avons pas réussi à récupérer le contenu";
            }
        } 
        else {
            section.innerText = "Requête en cours";
        }
    };

    httpRequest.open('GET', 'compte.json', true);
    httpRequest.send();
}