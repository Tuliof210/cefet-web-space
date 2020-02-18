// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
    todasAsImagens = [
        'philae-parts.jpg',
        'philae-rosetta.jpg',
        'philae-separation.jpg',
        'philae-67-picture.jpg',
        'philae-collecting.jpg'
    ];

console.log(`${servidorDasImagens}/${todasAsImagens[2]}`); //template string

var imgs = document.querySelector('#slide')
var ant = document.querySelector('#anterior')
var prox = document.querySelector('#proximo')

var atual = 0;

ant.addEventListener('click', function(e) {

    if (atual == 0) {
        atual = todasAsImagens.length;
    }
    console.log(atual - 1)
    imgs.src = `${servidorDasImagens}/${todasAsImagens[atual-1]}`

    atual--;
})

prox.addEventListener('click', function(e) {

    if (atual == (todasAsImagens.length - 1)) {
        atual = -1
    }
    console.log(atual + 1)
    imgs.src = `${servidorDasImagens}/${todasAsImagens[atual+1]}`

    atual++;
})