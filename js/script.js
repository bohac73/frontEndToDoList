const enviaFormulario = document.querySelector("#btn-enviaformulario")
const listaTarefa = document.querySelector("#todo-list")
const campoFormulario = document.querySelector("#new-task")
const listaStorage = JSON.parse(localStorage.getItem("listadetarefas")) || []

if(listaStorage === null || listaStorage.length == 0){
}
else{
    listaStorage.forEach(item => {
        const listItem = document.createElement("li")
        const itemText = document.createTextNode(item.tarefa)
        const btnExcluir = document.createElement("button")
        const textoDoBtn = document.createTextNode("Excluir")

        btnExcluir.appendChild(textoDoBtn)

        btnExcluir.addEventListener("click", () => {
            const itemASerRemovido = listaStorage.indexOf(item)    
            listaStorage.splice(itemASerRemovido, 1)
            listItem.remove()
            localStorage.setItem("listadetarefas", JSON.stringify(listaStorage))
        })

        listItem.appendChild(itemText)
        listItem.appendChild(btnExcluir)
        listaTarefa.appendChild(listItem)
        })
}

enviaFormulario.addEventListener("click", () => {
    const tarefa = {tarefa: campoFormulario.value}
    listaStorage.push(tarefa)
    localStorage.setItem("listadetarefas", JSON.stringify(listaStorage))
})