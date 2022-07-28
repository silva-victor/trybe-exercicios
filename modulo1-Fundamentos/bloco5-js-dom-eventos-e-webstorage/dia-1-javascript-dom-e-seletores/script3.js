//Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function mudaTexto() {
    const texto = document.getElementsByTagName("p")[1];
    texto.innerText = "milionário";
}

mudaTexto();

//Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function mudaBackColor() {
    let cor = document.getElementsByClassName("main-content")[0];
    cor.style.backgroundColor = 'rgb(76,164,109)'
}

mudaBackColor();



//Crie e execute uma função que mude a cor do quadrado vermelho para branco.

function changeColor() {
    let mudaVermelho = document.getElementsByClassName("center-content")[0];
    mudaVermelho.style.backgroundColor = 'white';
}

changeColor();


//Crie e execute uma função que corrija o texto da tag <h1>.

function correctText() {
    let corrigeTexto = document.getElementsByClassName("title")[0];
    corrigeTexto.innerText = "Exercício 5.1 - JavaScript";

}

correctText();


//Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.

function changeText() {
    let alteraTexto = document.getElementsByTagName('p');
    for (let index = 0; index < alteraTexto.length; index += 1) {
        console.log(alteraTexto[index]);
        alteraTexto[index].innerText = alteraTexto[index].innerText.toUpperCase();
    }
}

changeText();

//Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
