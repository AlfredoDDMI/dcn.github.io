document.getElementById('formulario-comentario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    agregarComentario(nombre, comentario);
    document.getElementById('nombre').value = '';
    document.getElementById('comentario').value = '';
});

function agregarComentario(nombre, comentario) {
    const listaComentarios = document.getElementById('lista-comentarios');
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario');
    nuevoComentario.innerHTML = `<strong>${nombre}:</strong> ${comentario}`;
    listaComentarios.appendChild(nuevoComentario);
}