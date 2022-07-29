// 1- Acesse o elemento elementoOndeVoceEsta.



// 2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let listaDeNetos = [
    'Jõao', 'Marcos', 'Pedro', ' Victor', 'Maria'];


// 3- Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let pai = document.querySelector('.netos');

for(let index = 0; index < listaDeNetos.length; index += 1) {
    let recebeValores = listaDeNetos[index];

    let criaNetos = document.createElement('li');
    criaNetos.innerText = recebeValores;

    pai.appendChild(criaNetos);
}
console.log(criaNetos); 



// 4- Acesse o primeiroFilho a partir de pai.







// 5- Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.






// 6- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.






// 7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.






// 8- Agora acesse o terceiroFilho a partir de pai.