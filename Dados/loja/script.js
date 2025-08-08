let produtos

window.onload = function(){
    var storeUser = localStorage.getItem("usuario")
    var user = JSON.parse(storeUser)

    var dataEntrada = new Date(user.dataEntrada);
    var dataFormatada = dataEntrada.toDateString("pt-BR", {
        day:"2-digit",
        month:"2-digit",
        year:"nuneric",
        hour:"2-digit",
        minute:"2-digit",
    })

    document.getElementById("perfil").innerText = dataFormatada
    document.getElementById("user").innerText = user.name
    document.getElementById("idPerfil").innerText = user.id

}


