function insert(num){
    var conteudo =  document.getElementById("res").innerText;
   document.getElementById("res").innerText = conteudo + num;
}
function clean(){
    var conteudo =  document.getElementById("res");
conteudo.innerText= "";
conteudo.style.textAlign ='right'
}
function calculo(){
    var conteudo =  document.getElementById("res");
if(conteudo.innerHTML == '+'){
conteudo.innerHTML= '1';
}
else{
    conteudo.innerHTML = '0';
}

}





