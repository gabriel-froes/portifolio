var textos = {
  'index.html': 'Gabriel Froes',
  'habilidades.html': 'Minhas Habilidades',
  'projetos.html': 'Meus Projetos'
};

var textoAtual = window.location.pathname.split('/').pop();
var textoCompleto = textos[textoAtual];
var partes = textoCompleto.split(' ', 2);

var atraso = 200;
var textoElemento = document.querySelector(".apresentacao__conteudo__titulo");

var contadorDeLetras = 0;

function escreverTexto() {
  if (contadorDeLetras < textoCompleto.length) {
    if (contadorDeLetras < partes[0].length) {
      textoElemento.innerHTML += textoCompleto.charAt(contadorDeLetras);
    } else if (contadorDeLetras === partes[0].length) {
      textoElemento.innerHTML += ' <span class="titulo-destaque">' + textoCompleto.charAt(contadorDeLetras) + '</span>';
      textoElemento.classList.add('destaque');
    } else {
      textoElemento.innerHTML += '<span class="titulo-destaque">' + textoCompleto.charAt(contadorDeLetras) + '</span>';
    }
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();