// definir constantes para uso no código
const btnAdd = document.getElementById("btn-add");
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual seu nome?")
tarefa.focus();

titulo.innerHTML = ` Lista de tarefa: ${nome} `;

//acoompanha o evento de clique do botão adicionar tarefa 
btnAdd.addEventListener("click", criaTarefa);

//envio com enter
tarefa.addEventListener('keypress', function (e){
    if(e.key === 'Enter') criarTarefa();
});

function criaTarefa(){
    if(tarefa.value==""){
        alert("digite a porra de alguma tarefa")
    }
    else{
        const listItem = document.createElement('li');
        listItem.textContent = tarefa.value;
        taskList.appendChild(listItem);

    //criar botão de deletar tarefa 
    const removeButton = document.createElement('button');
    removeButton.id = "remove";
    removeButton.textContent = "👎";
   
    //criar botão de concluir tarefa 
    const concluirButton = document.createElement('button');
     concluirButton.id = "conclui";
     concluirButton.textContent = "👍";
 
     
 let buttonsItem = document.createElement('div');
 buttonsItem.classList.toggle('buttonItem')
 listItem.appendChild(buttonsItem);
 buttonsItem.appendChild(concluirButton);
 buttonsItem.appendChild(removeButton);

 concluirButton.addEventListener("click", function(){
    listItem.classList.toggle('completed')
   taskList.removeAttribute(buttonsItem)
   this.textContent = "✅"
 })
 removeButton.addEventListener("click", function(){
    taskList.removeChild(listItem);
})


//apaga input após o envio 
tarefa.value = '';
tarefa.focus(); // Retorna o foco para o campo de entrada 
}

}