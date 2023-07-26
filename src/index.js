import './style.css';
import todoItem from "./create-todos";
import displayProject, { displayTodos, loadTodoForm } from './display-controller';

// When "Add Project" button is pressed, add project

const addProjectButton = document.querySelector(".add-project");
const form = document.querySelector("form");
let projects = []; // Stores the DOM projects

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Everytime a project is added it will be pushed to projects array
    // And an event listener will be added to the project
    projects.push(document.querySelector(".project-container").lastChild)
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
    const newTask = todoItem(document.querySelector("#title").value, document.querySelector("#description").value, document.querySelector("#due-date").value, document.querySelector("#priority").value );
    console.log(newTask)
})
