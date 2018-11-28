
var tipo = document.getElementById("limits");
var cositoo = "nulo";

if(typeof localStorage.getItem("cosito") != "undefined") {
    cositoo = localStorage.getItem("cosito");
}

tipo.value = cositoo;

tipo.addEventListener("change", function(){


    var seleccionado = tipo.options[tipo.selectedIndex].value;
    //alert(seleccionado);

    localStorage.setItem("cosito", seleccionado);

    location.href= "/?tipo=" + seleccionado; 
    
}) 

