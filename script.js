function encriptar(){ //Definiendo la funcion.
    var texto = document.getElementById('textoEncriptado').value.toLowerCase(); // Obtener un valor de HTML, para onvertirlo a minusculas.

    // Reemplazar todas las ocurrencias de la letras 'e, i, a, o, u'
    // i = es para que tome letras mayusculas y minusculas
    // g = toma en cuenta tola la linea o la oracion
    // m = tome en cuenta multiples lineas

    var textoEncriptado = texto.replace(/e/img, 'enter');
    var textoEncriptado = textoEncriptado.replace(/i/img, 'imes');
    var textoEncriptado = textoEncriptado.replace(/a/img, 'ai');
    var textoEncriptado = textoEncriptado.replace(/o/img, 'ober');
    var textoEncriptado = textoEncriptado.replace(/u/img, 'ufat');

    document.getElementById('textoDesencriptado').innerHTML = textoEncriptado; // Texto Desencriptado sera reemplazado por texto Encriptado
    document.getElementById('botonCopiar').style.display = 'show'; // Muestra en pantalla el boton copiar
    document.getElementById('botonCopiar').style.display = 'inherit'; // Hereda el estilo de visualizacion
}

function desencriptar(){ //Definicendo la funcion.
    var texto = document.getElementById('textoEncriptado').value.toLowerCase(); // Obtener un valor de HTML, para onvertirlo a minusculas.

    // Reemplazar todas las ocurrencias de la letras 'e, i, a, o, u'
    var textoEncriptado = texto.replace(/enter/img, 'e');
    var textoEncriptado = textoEncriptado.replace(/imes/img, 'i');
    var textoEncriptado = textoEncriptado.replace(/ai/img, 'a');
    var textoEncriptado = textoEncriptado.replace(/ober/img, 'o');
    var textoEncriptado = textoEncriptado.replace(/ufat/img, 'u');

    document.getElementById('textoDesencriptado').innerHTML = textoEncriptado; // Texto encriptado sera reemplazado por texto desencriptado.
}

function copiar(){
    var contenido = document.querySelector('#textoDesencriptado');
    contenido.select();
    document.execCommand('copy'); // Copia al portapapeles
}