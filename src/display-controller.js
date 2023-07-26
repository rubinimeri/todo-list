import todoItem, { Project, projectList, addProject, checkTitle, select, unselect, checkSelect } from "./create-todos";

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

export function loadTodoForm() {
    const createTodos = document.querySelector(".create-todo");
    createTodos.style.display = "flex";
}

// Loads all todos
export function loadTodos(projectList) {
    const todoList = document.querySelector(".todo-list");
    const project = checkSelect(projectList);
    console.log(project);
    project.todoItems.forEach(item => {
        todoList.textContent += `${item.title} - ${item.dueDate} - ${item.priority} - ${item.description}`
    })
}
// Loads one todo
export function loadOneTodo(projectList) {
    const todoList = document.querySelector(".todo-list");
    const project = checkSelect(projectList);
    const newTask = project.todoItems[project.todoItems.length-1];

    todoList.textContent += `${newTask.title} - ${newTask.dueDate} - ${newTask.priority} - ${newTask.description} 
    
    `
}
// Removes all todos
export function removeTodos() {
    const todoList = document.querySelector(".todo-list");
    todoList.textContent = "";
}

export function displayTodos(event) {
    // Remove todo-items
    removeTodos();

    // Unselect all projects
    unselect(projectList);
    console.log(projectList)

    // Display todos
    const todos = document.querySelector(".todos");
    todos.style.display = "block";
    const todoList = document.querySelector(".todo-list");

    // If the title of the link that was clicked is equal to a project title
    // in the projectList array then select that project
    projectList.forEach(project => {
        if(event.target.innerText === project.title) {
            select(project);
            console.log(project);
        }
    });
    // Load todo-items
    loadTodos(projectList);
}