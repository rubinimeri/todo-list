import './style.css';
import todoItem, { addTodoItem, projectList } from "./create-todos";
import displayProject, { displayTodos, loadOneTodo, loadTodoForm, loadTodos } from './display-controller';

// When "Add Project" button is pressed, add project

const addProjectButton = document.querySelector(".add-project");
const form = document.querySelector("form");
let projects = []; // Stores the DOM projects
let currentProject;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Everytime a project is added it will be pushed to projects array
    // And an event listener will be added to the project
    if(document.querySelector(".project-container").lastChild !== null)
        projects.push(document.querySelector(".project-container").lastChild);
    if(projects.length > 0)
        projects[projects.length-1].addEventListener("click", displayTodos);
})
addProjectButton.addEventListener("click", displayProject);

// When "+" button is clicked, display the task creator
const createButton = document.querySelector(".create-todo-button");
createButton.addEventListener("click", loadTodoForm)

// Prevent the form from refreshing the page when submitted
const todoForm = document.querySelector(".main form");
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
})

// 
const todoButton = document.querySelector(".main form button");
todoButton.addEventListener("click", () => {

    // Create new todoItem, add it to the project and load it
    const newTask = todoItem(document.querySelector("#title").value, document.querySelector("#description").value, document.querySelector("#due-date").value, document.querySelector("#priority").value );
    addTodoItem(projectList, newTask);
    loadOneTodo(projectList);

    // Select div.create-todo and make it disappear
    const createTodo = document.querySelector(".create-todo");
    createTodo.style.display = "none";
})
