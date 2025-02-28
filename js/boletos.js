document.getElementById('boton-comprar').addEventListener('click', function() {
    const tipoBoleto = document.getElementById('tipo-boleto').value;
    const cantidadBoletos = document.getElementById('cantidad-boletos').value;
    // Aquí puedes agregar la lógica para procesar la compra
    alert(`Comprando ${cantidadBoletos} boletos ${tipoBoleto}`);
});