let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Boas vindas,", info['personagem'] + "!");

  info.recorrente = "Sim";

  console.log(info);

  for (let key in info){
    console.log(key);
  }

  for (let key in info){
    console.log(info[key]);
  }
  
  /*let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: "Sim",
  };

  console.log(info(key), "e", info2(key));*/

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
 /*
  console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + "se chama " + leitor.livrosFavoritos['0']); 
 Precisa corrigir o console.log acima */

 