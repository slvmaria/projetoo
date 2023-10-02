function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const  listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto

while (contador < listaDeTeclas.length)  {
    listaDeTeclas[contador].onclick = tocaSom;
      
    contador = contador + 1
    
    console.log(contador);


}