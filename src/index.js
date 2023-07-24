import './style.css';
import todoItem from "./create-todos";
import displayProject from './display-controller';

// When "Add Project" button is pressed, add project

const addProjectButton = document.querySelector(".add-project");
const form = document.querySelector(".sidebar form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
})
addProjectButton.addEventListener("click", displayProject);
