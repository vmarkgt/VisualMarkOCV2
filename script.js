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

    // Ocultar el botón antes de capturar
    button.style.display = 'none';

    // Convertir el contenido de los textarea en divs temporales
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        const div = document.createElement('div');
        div.className = 'textarea-replacement';
        div.style.width = textarea.clientWidth + 'px';
        div.style.height = textarea.clientHeight + 'px';
        div.style.border = '1px solid #ccc';
        div.style.padding = '8px';
        div.style.borderRadius = '4px';
        div.style.whiteSpace = 'pre-wrap'; // Mantener los saltos de línea
        div.innerText = textarea.value; // Colocar el texto dentro del div
        textarea.style.display = 'none'; // Ocultar el textarea original
        textarea.parentNode.insertBefore(div, textarea); // Insertar el div
    });

    // Capturar el contenido en JPG
    html2canvas(container, {
        scrollX: 0,
        scrollY: 0,
        width: container.scrollWidth,
        height: container.scrollHeight,
        useCORS: true,
        scale: 2
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'Formulario_de_Compra.jpg';
        link.href = canvas.toDataURL('image/jpeg');
        link.click();

        // Restaurar los textareas originales y eliminar los divs temporales
        const replacements = document.querySelectorAll('.textarea-replacement');
        replacements.forEach(replacement => {
            replacement.nextElementSibling.style.display = ''; // Mostrar textarea original
            replacement.remove(); // Eliminar el div temporal
        });

        // Mostrar el botón nuevamente
        button.style.display = 'block';
    });
}
