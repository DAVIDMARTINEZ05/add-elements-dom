// Selección de elementos HTML
const btn = document.getElementById("agregar");
const lista = document.getElementById("lista");

// Agregar el evento al botón
btn.addEventListener("click", function() {
    // Pedir datos al usuario
    let nombre = prompt("¿Cómo te llamas?");
    let edad = prompt("¿Cuántos años tienes?");
    let trabajo = prompt("¿Dónde trabajas?");
    let hobbie = prompt("¿Hobbies?");
    let mascota = prompt("¿Cómo se llama tu mascota?");

    // Limpiar la lista antes de agregar nuevos datos
    lista.innerHTML = "";

    // Crear y añadir cada elemento de la lista
    let datos = [ 
        `Nombre: ${nombre}`,
        `Edad: ${edad}`,
        `Trabajo: ${trabajo}`,
        `Hobbies: ${hobbie}`,
        `Mascota: ${mascota}`
    ];

    datos.forEach(dato => {
        let item = document.createElement("li");
        item.textContent = dato;
        lista.appendChild(item);
    });
});