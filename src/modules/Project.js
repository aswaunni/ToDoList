
export default class Project {
    constructor(projectName) {
        this.name = projectName;
        this.tasks = [];
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getTasks() {
        return this.tasks;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName)
    }

    addTask(newTask) {
        if (this.tasks.find((task) => task.getName() === newTask.name))
            return
        this.tasks.push(newTask)
    }

    setTaskStatus(taskName, status) {
        this.tasks.map((task) => {
            if (task.name === taskName) task.setStatus(status)
        })
    }

    contains(taskName) {
      return this.tasks.some((task) => task.getName() === taskName)
    }

    deleteTask(taskName) {
        const taskToDelete = this.tasks.find((task) => taskName === task.name);
        this.tasks.splice(this.tasks.indexOf(taskToDelete), 1);
    }

    clearCompletedTasks() {
        this.tasks = this.tasks.filter((task) => task.status === false)
    }
}
