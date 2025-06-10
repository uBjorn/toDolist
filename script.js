// definir constantes para uso no código
const btnAdd = document.getElementById("btn-add");
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual seu nome?")
titulo.innerHTML = ` Lista de tarefa: ${nome} `;


btnAdd.addEventListener("click", criaTarefa);

function criaTarefa(){
    
}