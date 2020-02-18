// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

var itens = document.querySelectorAll('.botao-expandir-retrair')

for (let i of itens) {
    i.addEventListener('click', function(e) {
        let pEl = e.currentTarget;
        let parent = pEl.parentElement; //parent of button => p
        parent.classList.toggle('expandido');
    })
}