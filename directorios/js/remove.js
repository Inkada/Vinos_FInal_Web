
var elboton = document.querySelector(".removee");

elboton.addEventListener("click",function(){
    document.querySelector(".bolsaDeCompra").innerHTML = "";
    localStorage.setItem('compras', "");
})



