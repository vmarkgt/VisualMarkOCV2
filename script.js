function updatePaymentFields() {
    const paymentMethod = document.getElementById('pago').value;
    const efectivoField = document.getElementById('efectivoField');
    const creditoField = document.getElementById('creditoField');

    if (paymentMethod === 'efectivo') {
        efectivoField.style.display = 'block';
        creditoField.style.display = 'none';
    } else if (paymentMethod === 'credito') {
        efectivoField.style.display = 'none';
        creditoField.style.display = 'block';
    } else {
        efectivoField.style.display = 'none';
        creditoField.style.display = 'none';
    }
}

function downloadJPG() {
    const container = document.getElementById('form-content');
    const button = document.getElementById('download-btn');

    // Ocultar el botón
    button.style.display = 'none';

    html2canvas(container, {
        scale: 2,
        width: container.scrollWidth,
        height: container.scrollHeight,
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'Formulario_de_Compra.jpg';
        link.href = canvas.toDataURL('image/jpeg');
        link.click();

        // Mostrar el botón nuevamente
        button.style.display = 'block';
    });
}
