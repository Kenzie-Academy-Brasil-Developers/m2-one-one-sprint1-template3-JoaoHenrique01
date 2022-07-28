const listaDeDevs = [
  {
    nome: "Rafael Bertoldo",
    stackDeEstudo: "back-end",
    imagem: "./assets/Bertoldo.jpg",
  },
  {
    nome: "Jardel Lacerda",
    stackDeEstudo: "front-end",
    imagem: "./assets/Jardel.jpg",
  },
  {
    nome: "Victor Augusto",
    stackDeEstudo: "fullstack",
    imagem: "./assets/Victor.jpg",
  },
  {
    nome: "Nicole Pimenta",
    stackDeEstudo: "front-end",
    imagem: "./assets/Nicole.jpg",
  },
  {
    nome: "Maria Ferrari",
    stackDeEstudo: "front-end",
    imagem: "./assets/Mia.jpg",
  },
  {
    nome: "Sidny",
    stackDeEstudo: "back-end",
    imagem: "./assets/Sid.jpg",
  },
];


//Função para renderizar os cards;
function renderizarCards(array) {
  //Capturar a section e o footer
    const section = document.getElementById("devs__list");
    const footer = document.getElementById("main__footer");


    for(let i=0; i<array.length; i++) {
      const div = document.createElement("div");
      const h2 = document.createElement("h2");
      const img = document.createElement("img"); //Irá receber um valor em src;

      //Adicionar dados aos elementos criados.
      h2.innerText(array[i].nome);
      img.src.innerText(array[i].imagem);

      

      div.append(h2, img);
      section.appendChild(div);


    }

}
