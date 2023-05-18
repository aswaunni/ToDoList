import TodoList from './TodoList.js'
import Project from './Project.js'
import Task from './Task.js';

export default class Storage {
    static getTodoList() {
        try {
            const todoList = Object.assign(new TodoList(), 
                JSON.parse(localStorage.getItem('TodoList')))
    
            todoList.setProjects(
                todoList
                  .getProjects()
                  .map((project) => Object.assign(new Project(), project))
              )
          
              todoList
                .getProjects()
                .forEach((project) =>
                  project.setTasks(
                    project.getTasks().map((task) => Object.assign(new Task(), task))
                  )
                )
    
            return todoList;
        } catch {
            return new TodoList();
        }
    }

    static saveTodoList(data) {
        localStorage.setItem('TodoList', JSON.stringify(data));
    }

    static addProject(project) {
        const todoList = this.getTodoList();
        todoList.addProject(project);
        Storage.saveTodoList(todoList);
    }

    static setTaskStatus(projectName, taskName, status) {
        const todoList = this.getTodoList();
        todoList.getProject(projectName).setTaskStatus(taskName, status);
        Storage.saveTodoList(todoList);
    }

    static deleteProject(project) {
        const todoList = this.getTodoList();
        todoList.deleteProject(project);
        Storage.saveTodoList(todoList);
    }

    static clearCompletedTasks(projectName) {
        const todoList = this.getTodoList();
        todoList.getProject(projectName).clearCompletedTasks();
        Storage.saveTodoList(todoList);
    }

    static addTask(projectName, task) {
        const todoList = this.getTodoList();
        todoList.getProject(projectName).addTask(task);
        Storage.saveTodoList(todoList);
    }

    static deleteTask(projectName, taskName) {
        const todoList = this.getTodoList();
        todoList.getProject(projectName).deleteTask(taskName);
        Storage.saveTodoList(todoList);
    }

    static renameTask(projectName, taskName, newTaskName) {
        const todoList = this.getTodoList();
        todoList.getProject(projectName).getTask(taskName).setName(newTaskName);
        Storage.saveTodoList(todoList);
    }

    static setTaskDate(projectName, taskName, newDueDate) {
        const todoList = this.getTodoList();
        todoList.getProject(projectName).getTask(taskName).setDate(newDueDate);
        Storage.saveTodoList(todoList);
    }

    static updateTodayProject() {
        const todoList = Storage.getTodoList()
        todoList.updateTodayProject()
        Storage.saveTodoList(todoList)
    }
    
    static updateWeekProject() {
        const todoList = Storage.getTodoList()
        todoList.updateWeekProject()
        Storage.saveTodoList(todoList)
    }
}