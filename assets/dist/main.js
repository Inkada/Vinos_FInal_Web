
document.querySelectorAll('.wineContainer').forEach((e) => {

    e.addEventListener('click', (e) => {
        document.querySelector('.forPopUp').innerHTML = `
        <div class="popup">
        <div class="productContainer">

        <div class="imageContainer">
            <div class="wineImage" style="background-image:url('/imgs/wines/wine.png')">

            </div>
        </div>
        <div class="detailsContainer">
            <div class="title">
                <h3>Vino Rojo (800ml)</h3>
                <h6>A00058176</h6>
            </div>

            <div class="price">
                <h6>Precio</h3>
                    <h3>$25 000</h3>
            </div>

            <div class="quantity">
                <h6>Cantidad</h6>
                <input type="number" name="" id="" value="1">
            </div>

            <div class="buttonAddBag">
                <div class="icon">
                    <img src="/imgs/icos/bag.png" alt="">
                </div>
                <p>Agregar a la bolsa</p>
            </div>
        </div>
    </div>
    </div>
        `;

        document.querySelector('.buttonAddBag').addEventListener('click', (e) => {
            document.querySelector('.forPopUp').innerHTML = '';
        })
    })
})