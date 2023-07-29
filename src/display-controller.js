import { Project, projectList, addProject, checkTitle, select, unselect, checkSelect } from "./create-todos";

export default function displayProject() {
    // Create new project
    const project = Project(document.querySelector(".sidebar input").value);
    document.querySelector(".sidebar input").value = "";
    
    // Check if a project with that title already exists
    if(checkTitle(project)) {
        alert("Project with that title already exists");
        return ;
    }
    // Check if a project name is blank
    if(project.title === "") {
        alert("Project title must not be blank");
        return;
    }
    // Add project to projectList
    addProject(project);

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

// Create todos
const createTodos = (item) => {
    // Create/select elements
    const todoList = document.querySelector(".todo-list");
    const project = checkSelect(projectList);
    const newTask = item;
    const todoItem = document.createElement("div");
    const checkMarkContainer = document.createElement("div");
    const checkBox = document.createElement("input");
    const checkBoxLabel = document.createElement("label");
    const buttonContainer = document.createElement("div");
    const date = document.createElement("p");
    const showMoreOrLess = document.createElement("a");
    const svgDown = document.querySelector(".svg-down");
    const cloneDown = svgDown.cloneNode(true);
    const svgUp = document.querySelector(".svg-up");
    const cloneUp = svgUp.cloneNode(true);
    const deleteButton = document.createElement("button");
    const deleteSvg = document.querySelector(".delete-svg");
    const deleteSvgClone = deleteSvg.cloneNode(true);

    // Add classes
    todoItem.classList.add("todo-item");
    checkMarkContainer.classList.add("checkmark-container");
    buttonContainer.classList.add("button-container");
    date.classList.add("date");
    showMoreOrLess.classList.add("showMoreOrLess");
    deleteButton.classList.add("delete-button");

    // Add attributes
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "task-complete");
    checkBoxLabel.setAttribute("for", "task-complete");
    showMoreOrLess.setAttribute("href", "#");
    deleteButton.setAttribute("title", newTask.title);

    // Append elements
    todoList.append(todoItem);
    todoItem.append(checkMarkContainer);
    checkMarkContainer.append(checkBox);
    checkMarkContainer.append(checkBoxLabel);
    todoItem.append(buttonContainer);
    buttonContainer.append(date);
    buttonContainer.append(showMoreOrLess);
    showMoreOrLess.append(cloneDown);
    deleteButton.append(deleteSvgClone);
    buttonContainer.append(deleteButton);

    // Element styling
    cloneDown.style.display = "block";
    deleteSvgClone.style.display = "block";

    // Element text
    checkBoxLabel.innerText = newTask.title;
    date.innerText = newTask.dueDate;

    // Event listeners
    showMoreOrLess.addEventListener("click", () => {
        if(cloneDown.style.display === "block"){
            cloneDown.style.display = "none";
            cloneUp.style.display = "block";
            showMoreOrLess.append(cloneUp);

            // Load Description
            const descriptionContainer = document.createElement("div");
            const description = newTask.description;
            descriptionContainer.append(description);
            todoItem.append(descriptionContainer);
        }
        else {
            cloneUp.style.display = "none"
            cloneDown.style.display = "block";
            todoItem.removeChild(todoItem.lastElementChild);
        } 
    });
    deleteButton.addEventListener("click", () => {
        for(let i = 0; i < project.todoItems.length; i++) {
            if(project.todoItems[i].title === deleteButton.getAttribute("title")) {
                project.todoItems.splice(i, 1);
                const removedElement = document.querySelector(`.todo-item:nth-child(${i+1})`);
                removedElement.remove();
            }
        }
    })
    checkBox.addEventListener("input", () => {
        if(checkBoxLabel.style.textDecoration === "line-through"){
            checkBoxLabel.style.textDecoration = "none";
            checkBoxLabel.style.color = "black";
            return;
        }
        checkBoxLabel.style.textDecoration = "line-through";
        checkBoxLabel.style.color = "gray";
    })
};

// Loads all todos
export function loadTodos(projectList) {
    const project = checkSelect(projectList);
    project.todoItems.forEach(item => {
        createTodos(item);
    })
}
// Loads one todo
export function loadOneTodo(projectList) {
    const project = checkSelect(projectList);
    const newTask = project.todoItems[project.todoItems.length-1];
    createTodos(newTask);
}
// Removes all todos
export function removeTodos() {
    const todoList = document.querySelector(".todo-list");
    while(todoList.lastChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

export function displayTodos(event) {
    // Remove todo-items
    removeTodos();

    // Unselect all projects
    unselect(projectList);

    // Add project title to h2.project-title
    const projectTitle = document.querySelector(".project-title");
    projectTitle.innerText = event.target.innerText;

    // Display todos
    const todos = document.querySelector(".todos");
    todos.style.display = "block";

    // If the title of the link that was clicked is equal to a project title
    // in the projectList array then select that project
    projectList.forEach(project => {
        if(event.target.innerText === project.title) {
            select(project);
        }
    });
    // Load todo-items
    loadTodos(projectList);
}

