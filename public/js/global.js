try{
    window.wai = function(files){
        return `/players/${files}`
    }
    window.addEventListener("load", Dados.start());
}catch(erro){
    alert("Erro Global.js" + erro)
}
