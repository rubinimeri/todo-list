import './style.css';
import todoItem from "./create-todos";
import displayProject, { displayTodos } from './display-controller';

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
