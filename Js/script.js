var vazio;
function insert(num){
    if(vazio == '1'){
        window.alert("Apague a calculadora")
    }
    else{   
    var conteudo =  window.document.getElementById("res").innerText;
    document.getElementById("res").
    innerText = conteudo + num;
    }
}
function clean(){
    var conteudo =  document.getElementById("res");
conteudo.innerText= "";
conteudo.style.textAlign ='right'
vazio = '0';
}
function calculo(){
    var resultado = window.document.getElementById("res").innerHTML;
    if(resultado){
        window.document.getElementById("res").innerHTML = eval(resultado);
        vazio = '1';
    }

}





