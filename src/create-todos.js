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