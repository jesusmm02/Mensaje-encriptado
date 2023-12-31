let sign = prompt("MENSAJE SECRETO:");
let mensaje=sign.toUpperCase();

function reemplazarLetras(mensaje) {
const letras = mensaje.split('');
let resultado='';

for (let i = 0; i < letras.length; i++) {
    let letraActual = letras[i];
    let letraSiguiente = '';

    if (letraActual === 'Z') {
      letraSiguiente = 'A';
    } else if (letraActual >= 'A' && letraActual < 'Z') {
      letraSiguiente = String.fromCharCode(letraActual.charCodeAt(0) + 1);
    } else {
      letraSiguiente = letraActual;
    }

    resultado += letraSiguiente;
  }

  return resultado;
}

function reemplazarDigitos(mensaje) {
    let resultado = '';
  
    for (let i = 0; i < mensaje.length; i++) {
      let caracterActual = mensaje[i];
      let caracterSiguiente = '';
  
      if (/[0-8]/.test(caracterActual)) {
        caracterSiguiente = String.fromCharCode(caracterActual.charCodeAt(0) + 1);
      } else if (caracterActual === '9') {
        caracterSiguiente = '0';
      } else {
        caracterSiguiente = caracterActual;
      }
  
      resultado += caracterSiguiente;
    }
  
    return resultado;
}
  
const cadenaOriginal = mensaje;
const cadenaReemplazada = reemplazarLetras(reemplazarDigitos(cadenaOriginal));
console.log(cadenaReemplazada);

const resultadoElement = document.querySelector('.resultado');
resultadoElement.textContent = cadenaReemplazada;