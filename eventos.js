document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('contenedor');
    div.addEventListener('click', () => {
        alert('Hola! Soy el div');
    });

    const boton = document.getElementById('boton-salidas');
    boton.addEventListener('click', (event) => {
        event.stopPropagation(); // Detiene la propagación del evento al div
    });
});

