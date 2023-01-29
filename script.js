function encriptar(){ //Definiendo la funcion.
    var texto = document.getElementById('textoEncriptado').value.toLowerCase(); // Obtener un valor de HTML, para onvertirlo a minusculas.

    // Reemplazar todas las ocurrencias de la letras 'e, i, a, o, u'
    // i = es para que tome letras mayusculas y minusculas
    // g = toma en cuenta tola la linea o la oracion
    // m = tome en cuenta multiples lineas
    var textoEncriptado = texto;
    var textoEncriptado = textoEncriptado.replace(/e/img, 'enter');
    var textoEncriptado = textoEncriptado.replace(/i/img, 'imes');
    var textoEncriptado = textoEncriptado.replace(/a/img, 'ai');
    var textoEncriptado = textoEncriptado.replace(/o/img, 'ober');
    var textoEncriptado = textoEncriptado.replace(/u/img, 'ufat');

    document.querySelector('#textoDesencriptado').value = textoEncriptado; // Texto Desencriptado sera reemplazado por texto Encriptado
    document.getElementById('botonCopiar').style.display = 'inline-block';
    document.getElementById('textoEncriptado').value = ""; // Hereda el estilo de visualizacion
}

function desencriptar(){ //Definicendo la funcion.
    var texto = document.getElementById('textoEncriptado').value.toLowerCase(); // Obtener un valor de HTML, para onvertirlo a minusculas.

    // Reemplazar todas las ocurrencias de la letras 'e, i, a, o, u'
    var textoDesencriptado = texto;
    var textoDesencriptado = textoDesencriptado.replace(/enter/img, 'e');
    var textoDesencriptado = textoDesencriptado.replace(/imes/img, 'i');
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, 'a');
    var textoDesencriptado = textoDesencriptado.replace(/ober/img, 'o');
    var textoDesencriptado = textoDesencriptado.replace(/ufat/img, 'u');

    document.getElementById('textoDesencriptado').value = textoDesencriptado; // Texto encriptado sera reemplazado por texto desencriptado.
}

function copiar(){
    var contenido = document.querySelector('#textoDesencriptado');
    contenido.select();
    document.execCommand('copy'); // Copia al portapapeles
    contenido.value = '';
}