import Project from "./Project";
import Task from "./Task";

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

    updateTodayProject() {
        this.getProject('Today').tasks = []

        this.projects.forEach((project) => {
          if (project.getName() === 'Today' || project.getName() === 'This week')
            return

          const todayTasks = project.getTasksToday()
          todayTasks.forEach((task) => {
            const taskName = `${task.getName()} (${project.getName()})`
            this.getProject('Today').addTask(new Task(taskName, task.getDate(), task.getStatus()))
          })
        })
    }

    updateWeekProject() {
        this.getProject('This week').tasks = []

        this.projects.forEach((project) => {
          if (project.getName() === 'Today' || project.getName() === 'This week')
            return
        
          const weekTasks = project.getTasksThisWeek()
          weekTasks.forEach((task) => {
            const taskName = `${task.getName()} (${project.getName()})`
            this.getProject('This week').addTask(new Task(taskName, task.getDate()))
          })
        })
    
        this.getProject('This week').setTasks(
          this.getProject('This week')
            .getTasks()
            .sort((taskA, taskB) =>
              compareAsc(
                toDate(new Date(taskA.getDateFormatted())),
                toDate(new Date(taskB.getDateFormatted()))
              )
            )
        )
    }
}