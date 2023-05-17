import Project from "./Project";

export default class TodoList {
    constructor () {
        this.projects = [];
        this.projects.push(new Project('Inbox'));
        this.projects.push(new Project('Today'));
        this.projects.push(new Project('This week'));
    }

    getProjects() {
        return this.projects;
    }

    setProjects(projects) {
        this.projects = projects;
    }

    addProject(newProject) {
        if (this.projects.find((project) => newProject.name === project.name))
            return;

        this.projects.push(newProject);
    }

    getProject(projectName) {
        return this.projects.find((project) => project.getName() === projectName)
    }

    contains(projectName) {
        return this.projects.some((project) => project.getName() === projectName);
    }

    deleteProject(projectName) {
        const projectToDelete = this.projects.find((project) => projectName === project.name);
        this.projects.splice(this.projects.indexOf(projectToDelete), 1);
    }
}