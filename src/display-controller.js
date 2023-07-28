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
    // Check if a project name is blank
    if(project.title === "") {
        alert("Project title must not be blank");
        return;
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

    // Create div.todo-item
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoList.append(todoItem);

    // Create checkmark div
    const checkMarkContainer = document.createElement("div");
    checkMarkContainer.classList.add("checkmark-container");
    todoItem.append(checkMarkContainer);

    // Create input[type="checkbox"]
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "task-complete");
    checkMarkContainer.append(checkBox);

    // Create label for checkBox, and set it's text to project.title
    const checkBoxLabel = document.createElement("label");
    checkBoxLabel.setAttribute("for", "task-complete");
    checkBoxLabel.innerText = newTask.title;
    checkMarkContainer.append(checkBoxLabel);

    // Create div to store due-date and up/down button
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    todoItem.append(buttonContainer);

    // Create due-date
    const date = document.createElement("p");
    date.classList.add("date");
    date.innerText = newTask.dueDate;
    buttonContainer.append(date);

    // Create a.down
    const showMoreOrLess = document.createElement("a");
    showMoreOrLess.setAttribute("href", "#");
    showMoreOrLess.classList.add("showMoreOrLess");
    buttonContainer.append(showMoreOrLess);

    // Select svg.svg-down
    const svgDown = document.querySelector(".svg-down");
    const cloneDown = svgDown.cloneNode(true);
    cloneDown.style.display = "block";
    showMoreOrLess.append(cloneDown);

    // Select svg.svg-up
    const svgUp = document.querySelector(".svg-up");
    const cloneUp = svgUp.cloneNode(true);
    

    // Add event listener to a.showMoreOrLess
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
    })

    // Add delete button to buttonContainer
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("title", newTask.title);
    const deleteSvg = document.querySelector(".delete-svg");
    const deleteSvgClone = deleteSvg.cloneNode(true)
    deleteButton.append(deleteSvgClone);
    deleteSvgClone.style.display = "block";
    buttonContainer.append(deleteButton);

    // Add event listener to deleteButton
    deleteButton.addEventListener("click", () => {
        for(let i = 0; i < project.todoItems.length; i++) {
            if(project.todoItems[i].title === deleteButton.getAttribute("title")) {
                project.todoItems.splice(i, 1);
                console.log(project.todoItems);
                const removedElement = document.querySelector(`.todo-item:nth-child(${i+1})`);
                removedElement.remove();
            }
        }
    })
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

    // Add project title to h2.project-title
    const projectTitle = document.querySelector(".project-title");
    projectTitle.innerText = event.target.innerText;

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

