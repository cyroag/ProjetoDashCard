var templateBarra = `Bem vindo **NOME**`;


function verificaUsuario(){
    var userLogado = localStorage.getItem("userDash");
    if (!userLogado){
        window.location="index.html";        
    }
    else{
        var user = JSON.parse(userLogado);
        document.getElementById("barraUser").innerHTML = templateBarra.replace("**NOME**",user.nome);
    }
}