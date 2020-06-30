var templateUSR = `<div class="row rowuser">
                        <div class="col-md-6 comborda">
                            <h3> **NOME** </h3>
                            Racf: **RACF** <br>
                            Email: **EMAIL** <br>
                        </div>
                        
                        <div class="col-mf-4 comborda">
                            <h4>**NOMEDEPTO**</h4>
                            Unidade: **UNIDADE** <br>
                            Andar: **ANDAR**
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

        var novaLinha = templateUSR.replace("**NOME**",user.id_agente)
                                    .replace("**LINKFOTO**",user.nome_agente);
                                            
        contSTR = contSTR + novaLinha;
    }
    document.getElementById("conteudo").innerHTML = contSTR;

}