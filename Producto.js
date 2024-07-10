

function limpiarCaja() {
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("imagen").value = "";
}

function addDiv() {
    let imagen=document.getElementById("imagen").value
    let precio=document.getElementById("precio").value
    let nombre=document.getElementById("nombre").value

    const container = document.getElementById('container');
    const newSection = document.createElement('section');
    newSection.className = 'card';
      newSection.innerHTML = `
    <img class="imagenProducto" src="${imagen} "width="320" height="240">
    <p class="nombreProducto">${nombre} </p>
    <p class="precioProducto">${precio} <img class="eliminar"src="./Vector.png" onclick="eliminarCard()"/></p2> 
    
`;
container.appendChild(newSection);
limpiarCaja()
}


function eliminarCard(){

    const card = event.target.closest('.card');
    card.remove()

console.log(eliminarCard);


} 