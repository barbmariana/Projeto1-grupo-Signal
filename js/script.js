

function validarCampos(){
    
    var vName = document.getElementById("vName").value
    var vTel = document.getElementById("vTel").value
    var vEmail = document.getElementById("vEmail").value
    var vMessage = document.getElementById("vMessage").value

    if(vName == "" || vTel == "" || vEmail == "" || vMessage == ""){
        alert("É Preciso preencher todos os campos.")
    }
    else{
        alert("Parabéns sua mensagem foi enviada !")
        document.getElementById("vName").value = ""
        document.getElementById("vTel").value = ""
        document.getElementById("vEmail").value = ""
        document.getElementById("vMessage").value = ""
    }
}