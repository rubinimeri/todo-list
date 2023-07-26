import todoItem, { Project, projectList, addProject, checkTitle, select } from "./create-todos";

export default function displayProject() {
    // Create new project
    const project = Project(document.querySelector(".sidebar input").value);
    document.querySelector(".sidebar input").value = "";
    
    // Check if a project with that title already exists
    if(checkTitle(project)) {
        alert("Project with that title already exists");
        return ;
    }
    // Add project to projectList
    addProject(project);
    console.log(projectList);

    // Create link that represents the project we created earlier
    const title = document.createElement("a");
    title.setAttribute("href", "#");
    title.innerText = project.title;

    // Add the link to projectContainer
    const projectContainer = document.querySelector(".project-container");
    projectContainer.appendChild(title);
}

function loopThroughTodoItems(todoItems) {
    const todos = document.querySelector(".todos");
    todoItems.forEach(item => {
        const todoContainer = document.createElement("div");
        todoContainer.textContent = `${item.title} ${item.description} ${item.dueDate} ${item.priority}`

        todos.append(todoContainer);
    })
}

export function loadTodoForm() {
    const createTodos = document.querySelector(".create-todo");
    createTodos.style.display = "flex";
}

export function displayTodos(event) {
    projectList.forEach(project => {
        if(event.target.innerText === project.title) {
            document.querySelector(".todos").style.display = "block"
        }
    });
    
}