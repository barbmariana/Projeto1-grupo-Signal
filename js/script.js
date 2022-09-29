

function validarCampos(){
    // Vou pegar de explo o campo nome.
    // criei uma variavel chamada vName mas podia ser qualquer coisa.
    // depois eu fiz o caminho do HTML para pegar o id que eu coloquei la no input do campo nome do HTML. o caminho.
    // o caminho é esse document.getElementById("vName") ---->("aqui tem que esta o nome do id que botou no HTML"), eu escolhi vName.
    //document.getElementById("vName").value ----> ".value" é para pegar o valor digitado no campo lá no site.

    var vName = document.getElementById("vName").value
    var vTel = document.getElementById("vTel").value
    var vEmail = document.getElementById("vEmail").value
    var vMessage = document.getElementById("vMessage").value




    // no if eu verifiquei se la no HTML esta preencido ou não.
    if(vName == "" || vTel == "" || vEmail == "" || vMessage == ""){
        alert("É Preciso preencher todos os campos.")
    }
    else{
        alert("Parabéns sua mensagem foi enviada !")

        //aqui eu apos ver que ele preencheu dou uma mensagem e declaro que o que estava escrito agora vai ser "" ----> vazio.
        document.getElementById("vName").value = ""
        document.getElementById("vTel").value = ""
        document.getElementById("vEmail").value = ""
        document.getElementById("vMessage").value = ""
    }
}