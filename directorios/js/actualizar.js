var container = document.querySelector ('.bolsaDeCompra');

window.addEventListener('load', function () {
    var compras = JSON.parse(localStorage.getItem('compras'));

    if (compras != null) {
        compras.forEach(element => {
            var soloBorder = document.createElement("div");
            soloBorder.className = "soloBorder";
            soloBorder.innerHTML = `
            <div class="soloBorder">
            <div class="imagen--soloBorder">
                <img src="/static/files/` + element.imagen + `" alt="">
            </div>
            <div class="Info-Button--soloBorder">
                <p>` + element.nombre + `</p>
                <button class="removee">Remover</button>
            </div>
    
            <div>
                <div class="input-group plus-minus-input">
                    <div class="input-group-button">
    
                        </button>
                    </div>
                    <input class="input-group-field" type="number" name="quantity" value="0">
                    <div class="input-group-button">
    
                        </button>
                    </div>
                </div>
    
            </div>
        </div>
        `
        container.appendChild(soloBorder);
        });
    }
    
});

