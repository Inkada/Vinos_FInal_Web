
var tipo = document.getElementById("sortFilter");
var propiedad = "nulo";

if(typeof localStorage.getItem("valor") != "undefined") {
    propiedad = localStorage.getItem("valor");
}

tipo.value = propiedad;

tipo.addEventListener("change", function(){
    var seleccionado = tipo.options[tipo.selectedIndex].value;
    localStorage.setItem("valor", seleccionado);
    location.href= "/?tipo=" + seleccionado; 
    
}) 

