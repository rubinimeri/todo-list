import { Project, projectList, addProject, checkTitle, select } from "./create-todos";

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

export function displayTodos(event) {
    const todos = document.querySelector(".todos");
    todos.style.display = "block";
    
    const todoList = document.querySelector(".todo-list");
    projectList.forEach(project => {
        if(event.target.innerText === project.title) {
            if(project.todoItems.length === 0) {
                todoList.textContent = `${project.title} currently has no tasks`
            }
        }
    });
}