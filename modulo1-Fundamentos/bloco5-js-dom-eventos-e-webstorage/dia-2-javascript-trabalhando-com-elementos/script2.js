//🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

const elementDad = document.body;

const element = document.createElement('h1');

elementDad.appendChild(element);

element.innerText=('Exercício 5.2 - JavaScript DOM');

//🚀 Adicione a tag main com a classe main-content como filho da tag body;

const master = document.createElement('main');

master.className = 'main-content';

master.innerText;

elementDad.appendChild(master);

//🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let sec = document.createElement('section');

sec.className= 'center-content';

master.appendChild(sec);


//🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let par = document.createElement('p');

par.innerText= 'Este é um parágrafo!';

sec.appendChild(par);



//🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let sec2 = document.createElement('section');

sec2.className= 'left-content';

master.appendChild(sec2);


//🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let sec3 = document.createElement('section');

sec3.className= 'right-content';

master.appendChild(sec3);


//🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let image = document.createElement('img');

image.className= 'small-image';

image.src='https://picsum.photos/200';

sec2.appendChild(image);



//🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

 let uLista = document.createElement('ul');

 uLista.innerText= 'um, dois, três, quatro, cinco, seis, sete, oito, nove, dez.';

sec3.appendChild(uLista);

let li1 = document.createElement('li');
li1.innerText= 'um';
/*
let li2 = document.createElement('li');
li2.innerText='dois';
let li3 = document.createElement('li');
li3.innerText= 'três';
let li4 = document.createElement('li');
li4.innerText= 'quatro';
let li5 = document.createElement('li');
li5.innerText= 'cinco';
let li6 = document.createElement('li');
li6.innerText= 'seis';
let li7 = document.createElement('li');
li7.innerText= 'sete';
let li8 = document.createElement('li');
li8.innerText= 'oito';
let li9 = document.createElement('li');
li9.innerText= 'nove';
let li10 = document.createElement('li');
li10.innerText= 'dez';

li1.appendChild(uLista);
*/

//🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.


let para1 = document.createElement('h3');

let para2 = document.createElement('h3');

let para3 = document.createElement('h3');

master.appendChild(para1);

master.appendChild(para2);

master.appendChild(para3);

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

//🚀 Adicione a classe title na tag h1 criada;

element.className='title';

//🚀 Adicione a classe description nas 3 tags h3 criadas;

para1.className= 'description';
para2.className= 'description';
para3.className= 'description';


//🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

master.removeChild(sec2);

//🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

sec3.style.marginRight = 'auto';


//🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

master.style.backgroundColor= 'green';

//🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.






