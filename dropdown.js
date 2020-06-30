var templateUSR = `<div class="row rowuser">
                        <div class="col-md-6 comborda">
                            <h3> **ID** </h3>
                        </div>
                        
                        <div class="col-md-6 comborda">
                            <h4>**NOME**</h4>
                        </div> 
                    </div>`;

function carregaParceiros(){

    fetch("http://localhost:8080/nomeagentes")
        .then(res => res.json())
        .then(res => preenche(res));
}

function preenche(resJson){
    console.log(resJson);
    var contSTR ="";
    for(i=0; i<resJson.length; i++){
        var user = resJson[i];

        var novaLinha = templateUSR.replace("**ID**",user.id_agente)
                                    .replace("**NOME**",user.nome_agente);
                                            
        contSTR = contSTR + novaLinha;
    }
    document.getElementById("conteudo").innerHTML = contSTR;

}