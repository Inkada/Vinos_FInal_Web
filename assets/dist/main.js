
let view = true;

function checkViews() {
    if (view) {
        document.querySelector('.wineSuperContainerView1').style.display = 'flex';
        document.querySelector('.wineSuperContainerView2').style.display = 'none';
    } else {
        document.querySelector('.wineSuperContainerView1').style.display = 'none';
        document.querySelector('.wineSuperContainerView2').style.display = 'block';
    }
}

document.querySelector('.changeView').addEventListener('click', (e) => {
    checkViews();
    view = !view;

});
checkViews();
makeArrays();
let indexMine = 0;
drawArrays();

function makeArrays() {

    wineArray = [];

    for (let index = 0; index < wines.length; index++) {
        const element = wines[index];
        let elementPre;
        let elementPost;
        if (index != 0) {
            elementPre = wines[index - 1];
        }
        if (index != wines.length - 1) {
            elementPost = wines[index + 1];

        }

        let wine = {
            pre: elementPre,
            actual: element,
            post: elementPost
        }

        wineArray.push(wine);
    }
    console.log(wineArray);
}

function drawArrays() {

    for (let index = 0; index < wineArray.length; index++) {
        if (typeof wineArray[indexMine].pre == 'undefined') {
            document.querySelector('.preelement').innerHTML = `
            <div class="wineContainer">
                <div class="wineBackground" >
                </div>
                <div class="wineImage" >
                </div>
            </div>
            `;
        } else {
            document.querySelector('.preelement').innerHTML = `
            <div class="wineContainer">
                <div class="wineBackground" style="background-image:url('/imgs/Coleccion/${wineArray[indexMine].pre.fondo}')">
                </div>
                <div class="wineImage" style="background-image:url('/imgs/Coleccion/${wineArray[indexMine].pre.imagen}')">
                </div>
            </div>
            `;
        }

        document.querySelector('.element').innerHTML = `
        <a href="${wineArray[indexMine].actual.nombre}">
            <div class="wineContainer">
                <div class="wineBackground" style="background-image:url('/imgs/Coleccion/${wineArray[indexMine].actual.fondo}')">
                </div>
                <div class="wineImage" style="background-image:url('/imgs/Coleccion/${wineArray[indexMine].actual.imagen}')">
                </div>
            </div>
        </a>

        `;
        document.querySelector('.wineSuperContainerDetails').innerHTML = `
                    <p class="name">${wineArray[indexMine].actual.nombre}</p>
            <p class="type">${wineArray[indexMine].actual.tipo}</p>
            <div class="chart">
                <canvas id="myChart">

                </canvas>
        `;
        generateChart();
        if (typeof wineArray[indexMine].post == 'undefined') {
            document.querySelector('.postElement').innerHTML = `

            <div class="wineContainer">
                <div class="wineBackground" >
                </div>
                <div class="wineImage" >
                </div>
            </div>

            `;
        } else {
            document.querySelector('.postElement').innerHTML = `
            
            <div class="wineContainer">
                <div class="wineBackground" style="background-image:url('/imgs/Coleccion/${wineArray[indexMine].post.fondo}')">
                </div>
                <div class="wineImage" style="background-image:url('/imgs/Coleccion/${wineArray[indexMine].post.imagen}')">
                </div>
            </div>
            `;
        }

    }
}

document.querySelector('.preelement').addEventListener('click', (e) => {
    if (indexMine != 0) {
        indexMine--;
        drawArrays();
    }
})

document.querySelector('.postElement').addEventListener('click', (e) => {
    if (indexMine != wineArray.length - 1) {
        indexMine++;
        drawArrays();
    }
})

function generateChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var obj = wineArray[indexMine].actual.carateristicas;
    var result = Object.keys(obj).map(function (key) {
        return obj[key];
    });

    var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Denso', 'Líquido', 'Aromatico', 'Dulce', 'Alcohol'],
            datasets: [{
                lineTension: 0,
                pointRadius : 0,
                data: result,
                backgroundColor: '#262d2faa',
                borderColor: '#262d2f'
            }]
        },
        options: {
            title: {
                display: false,
            },
            tooltip: {
                enabled: false
            },
            legend: {
                display: false,
            },
        }
    });


}

