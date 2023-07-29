// Create todoItem factory function
export default function todoItem(title, description, dueDate, priority) {
    return { title, description, dueDate, priority };
}

// Create array that will hold every project
export let projectList = [];

// Create factory function that will create projects
export function Project(title) {
    return { title, selected: false, todoItems: [] }
}

// Function that adds todoItem to project
export function addTodoItem(projectList, newTask) {
    projectList.forEach(project => {
        if(project.selected === true){
            project.todoItems.push(newTask);
            console.log(project.todoItems);
        }
    });
}

// Function that adds projects to projectList
export function addProject(project) {
    projectList.push(project);
}

// Function that checks if a project with a certain title exists
export function checkTitle(prj) {
    return projectList.find(project => project.title === prj.title)
}

// If project is clicked, change the selected property to "true"
export function select(project) {
    project.selected = true;
}

// Function that unselects all projects
export function unselect(projectList) {
    projectList.forEach(project => {
        project.selected = false;
    });
}

// Check if project is seleceted 
export function checkSelect(projectList) {
    for (const project of projectList) {
        if(project.selected === true) {
            console.log(project)
            return project;
        }
    }
}

// Check if a todo with a certain title already exists
export function checkTodoTitle(newTask, project) {
    for (const item of project.todoItems) {
        if(item.title === newTask.title) {
            return true;
        }
    }
}