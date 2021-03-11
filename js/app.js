document.addEventListener('DOMContentLoaded', () => {
    cargarPortafolio();
});


function cargarPortafolio() {
    fetch('datos.json')
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((datos) => {
            let html = '';
            datos.portafolio.forEach(element => {
                html += `
                <div class="elemento">
                    <img src="img/${element.id}.jpg" alt="">
                    <div class="contenido">
                        <h3>${element.nombre}</h3>
                        <p>${element.desc}</p>
                    </div>
                </div>`;
            });
            document.querySelector('#listado').innerHTML = html;
        })
}