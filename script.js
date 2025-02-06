// Elements

let inputTask = document.getElementById("input-task")
let submitButton = document.getElementById("submit-button")
let list =  document.getElementById("list-container")

// Task Counter

let counter = 0

// Save task

const addTask = () => {
    if(inputTask.value != 0){
        if(inputTask.value.length <= 50){

            counter++

            counter>=10?list.style.paddingRight = "8px":list.style.paddingRight = ""

            // task container
            const container = document.createElement("div")
            container.className = "task-container"

            // create task

            const task = document.createElement("li")
            task.className = "task"
            task.innerHTML = inputTask.value
            inputTask.value = ""

            // buttons container

            const buttonsContainer = document.createElement("div")
            buttonsContainer.className = "task-buttons"

            // complete task button

            const completeTask = document.createElement("button")
            completeTask.className = "complete-task"
            completeTask.innerHTML = "✓"

            completeTask.addEventListener("click", () => {
                if(task.style.textDecorationLine == ""){
                    task.style.textDecorationLine = "line-through"
                }
                else{
                    task.style.textDecorationLine = ""
                }
            })

            // delete task button

            const deleteTask = document.createElement("button")
            deleteTask.className = "delete-task"
            deleteTask.innerHTML = "X"

            deleteTask.addEventListener("click", () => {
                counter--
                container.remove()
            })

            // edit task button

            const editTask = document.createElement("button")
            editTask.className = "edit-task"
            editTask.innerHTML = "✏️"

            editTask.addEventListener("click", () => {
                inputTask.value = task.innerHTML
            })

            buttonsContainer.appendChild(completeTask)
            buttonsContainer.appendChild(deleteTask)
            buttonsContainer.appendChild(editTask)

            container.appendChild(task)
            container.appendChild(buttonsContainer)

            list.appendChild(container)
        }
        else{
            alert("Usted superó la cantidad de caracteres permitidos")
        }
    }
    else{
        alert("Ingrese una tarea")
    }
}

submitButton.addEventListener("click", addTask)