const tituloPagina = document.getElementById("page-title");
const botao = document.getElementById("mode-selector");
const rodape = document.getElementsByTagName("footer");
const corpo = document.getElementsByTagName("body");

botao.addEventListener("click",darkMode());

function darkMode () {
	console.log("cliquei!");
}
