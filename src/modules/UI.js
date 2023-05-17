import Project from "./Project";
import Storage from "./Storage";
import Task from "./Task";

export default class UI {
    // Loading content

    static loadHomePage() {
        UI.loadProjects();
        UI.initProjectButtons();
    }

    static loadProjects() {
        Storage.getTodoList().getProjects().forEach((project) => {
            if (project.name !== 'Inbox' &&
                project.name !== 'Today' &&
                project.name !== 'This week') {
                UI.createProject(project.name);
            }
        })
        UI.initAddProjectButtons();
    }

    static closeAllInputs() {
      const taskButtons = document.querySelectorAll('[data-task-button]')
  
      taskButtons.forEach((button) => {
        UI.closeRenameInput(button)
        UI.closeSetDateInput(button)
      })
    }

    static closeAllPopups() {UI.closeAddProjectPopup()
        if (document.querySelector('.add-tasks-button')) {
          UI.closeAddTaskPopup()
        }
        if (
          document.querySelector('.tasks-list') &&
          document.querySelector('.tasks-list').innerHTML !== ''
        ) {
          UI.closeAllInputs()
        }
    }

    static clearProjects() {
        const projectsList = document.querySelector('.projects-list');
        projectsList.innerHTML = '';
    }

    static clearTasks() {
        const tasksList = document.querySelector('.tasks-list');
        tasksList.innerHTML = '';
    }

    static loadProjectContent(projectName) {
        const projectsPreview = document.querySelector('.projects-preview');
        projectsPreview.innerHTML = `
            <h1 class="project-name">${projectName}</h1>
            <div class="tasks-list"></div>`;

        if (projectName !== 'Today' && projectName !== 'This week') {
            projectsPreview.innerHTML += `
                <button class="add-tasks-button">
                    <i class="material-icons add-tasks-logo">add</i>
                    Add Task
                </button>
                <div class="add-tasks-popup">
                    <input class="add-tasks-popup-input" type="text" required>
                    <input class="add-tasks-popup-input-date" type="date" required>
                    <div class="add-tasks-popup-buttons">
                        <button class="add-tasks-popup-button">Add</button>
                        <button class="cancel-tasks-popup-button">Cancel</button>
                    </div>
                </div>`;
        }

        UI.loadTasks(projectName);
    }

    static loadTasks(projectName) {
        Storage.getTodoList()
            .getProject(projectName)
            .getTasks()
            .forEach((task) => UI.createTask(task.name, task.date, task.status))

        if (projectName !== 'Today' && projectName !== 'This week') {
            UI.initAddTaskButtons()
    }
    }
    // creating content
    static createProject(projectName) {
        const projectsList = document.querySelector('.projects-list');
        projectsList.innerHTML += `
            <button class="project-button">
                <div class="left-project-button">
                    <i class="material-icons project-logo">checklist</i>
                    <span>${projectName}</span>
                </div>
                <div class="right-project-button">
                    <i class="material-icons project-delete-logo">close</i>
                </div>
            </button>`;

        UI.initProjectButtons();
    }

    static createTask(name, date, status) {
        const tasksList = document.querySelector('.tasks-list')
        tasksList.innerHTML += `
          <button class="button-task" data-task-button>
            <div class="left-task-panel">
              <i class="material-icons task-logo ${status ? 'active' : ''}">done_outline</i>
              <p class="task-content ${status ? 'done' : ''}">${name}</p>
              <input type="text" class="input-task-name" data-input-task-name>
            </div>
            <div class="right-task-panel">
              <p class="due-date" id="due-date">${date}</p>
              <input type="date" class="input-due-date" data-input-due-date>
              <i class="material-icons task-delete-logo">close</i>
            </div>
          </button>`

        UI.initTaskButtons()
    }
    //Project button event listeners
    static initProjectButtons() {
        const inboxButton = document.querySelector('.inbox-button');
        const todayButton = document.querySelector('today-button');
        const weekButton = document.querySelector('week-button');
        const projectButtons = document.querySelectorAll('.project-button');

        projectButtons.forEach((button) => {
            button.addEventListener('click', UI.handleProjectButton)
        })
    }

    static handleProjectButton(e) {
        const projectName = this.children[0].children[1].textContent;

        if (e.target.classList.contains('project-delete-logo')) {
            UI.deleteProject(projectName, this);
            return;
        }

        UI.openProject(projectName, this)
    }

    static openProject(projectName, projectButton) {
        const defaultProjectButtons = document.querySelectorAll(
          '.default-projects-button'
        )
        const projectButtons = document.querySelectorAll('.project-button')
        const buttons = [...defaultProjectButtons, ...projectButtons]
      
        buttons.forEach((button) => button.classList.remove('active'))
        projectButton.classList.add('active')
        UI.closeAddProjectPopup()
        UI.loadProjectContent(projectName)
    }

    static deleteProject(projectName) {
        Storage.deleteProject(projectName);
        UI.clearProjects();
        UI.loadProjects();
    }
    // Add project button event listeners
    static initAddProjectButtons() {
        const addProjectsButton = document.querySelector('.add-projects-button');
        const addProjectsPopupInput = document.querySelector('.add-projects-popup-input')
        const addProjectsPopupButton = document.querySelector('.add-projects-popup-button')
        const cancelProjectsPopupButton = document.querySelector('.cancel-projects-popup-button')

        addProjectsButton.addEventListener('click', UI.openAddProjectPopup);
        addProjectsPopupInput.addEventListener('keypress', UI.handleAddProjectPopupInput)
        addProjectsPopupButton.addEventListener('click', UI.addProject);
        cancelProjectsPopupButton.addEventListener('click', UI.closeAddProjectPopup)
    }

    static openAddProjectPopup() {
        const addProjectsButton = document.querySelector('.add-projects-button');
        const addProjectsPopup = document.querySelector('.add-projects-popup')

        UI.closeAllPopups();

        addProjectsButton.classList.add('active')
        addProjectsPopup.classList.add('active')
    }

    static handleAddProjectPopupInput(e) {
        if (e.key == 'Enter')
            UI.addProject();
    }

    static addProject() {
        const addProjectsPopupInput = document.querySelector('.add-projects-popup-input')
        const projectName = addProjectsPopupInput.value

        if (Storage.getTodoList().contains(projectName)) {
            addProjectsPopupInput.value = ''
            alert('Project names must be different')
            return
        }

        Storage.addProject(new Project(projectName))
        UI.createProject(projectName)
        UI.closeAddProjectPopup();
    }

    static closeAddProjectPopup() {
        const addProjectsButton = document.querySelector('.add-projects-button');
        const addProjectsPopup = document.querySelector('.add-projects-popup')
        const addProjectsPopupInput = document.querySelector('.add-projects-popup-input')
        

        addProjectsButton.classList.remove('active')
        addProjectsPopup.classList.remove('active')
        addProjectsPopupInput.value = ''
    }

    // Task button event handlers
    static initTaskButtons() {
        const taskButtons = document.querySelectorAll('[data-task-button]')
        const taskNameInputs = document.querySelectorAll('[data-input-task-name')
        const dueDateInputs = document.querySelectorAll('[data-input-due-date')

        taskButtons.forEach((taskButton) =>
          taskButton.addEventListener('click', UI.handleTaskButton)
        )
        taskNameInputs.forEach((taskNameInput) =>
          taskNameInput.addEventListener('keypress', UI.renameTask)
        )
        dueDateInputs.forEach((dueDateInput) =>
          dueDateInput.addEventListener('change', UI.setTaskDate)
        )
    }

    static handleTaskButton(e) {
        if (e.target.classList.contains('task-logo')) {
          UI.setTaskCompleted(this)
          return
        }
        if (e.target.classList.contains('task-delete-logo')) {
          UI.deleteTask(this)
          return
        }
        if (e.target.classList.contains('task-content')) {
          UI.openRenameInput(this)
          return
        }
        if (e.target.classList.contains('due-date')) {
          UI.openSetDateInput(this)
        }
    }

    static setTaskCompleted(taskButton) {
        const projectName = document.querySelector('.project-name').textContent
        const taskName = taskButton.children[0].children[1].textContent
        const taskLogo = taskButton.children[0].children[0]
        const taskNamePara = taskButton.children[0].children[1]

        let status = false;
        if (taskLogo.classList.contains('active')) {
            taskLogo.classList.remove('active');
            taskNamePara.classList.remove('done');
        } else {
            taskLogo.classList.add('active');
            taskNamePara.classList.add('done');
            status = true;
        }
        Storage.setTaskStatus(projectName, taskName, status)
    }

    static deleteTask(taskButton) {
        const projectName = document.querySelector('.project-name').textContent
        const taskName = taskButton.children[0].children[1].textContent

        Storage.deleteTask(projectName, taskName)
        UI.clearTasks()
        UI.loadTasks(projectName)
    }

    static openRenameInput(taskButton) {
        const taskNamePara = taskButton.children[0].children[1]
        let taskName = taskNamePara.textContent
        const taskNameInput = taskButton.children[0].children[2]
        const projectName = taskButton.parentNode.parentNode.children[0].textContent

        UI.closeAllPopups()
        taskNamePara.classList.add('active')
        taskNameInput.classList.add('active')
        taskNameInput.value = taskName
    }

    static closeRenameInput(taskButton) {
      const taskName = taskButton.children[0].children[1]
      const taskNameInput = taskButton.children[0].children[2]
  
      taskName.classList.remove('active')
      taskNameInput.classList.remove('active')
      taskNameInput.value = ''
    }

    static openSetDateInput(taskButton) {
        const dueDate = taskButton.children[1].children[0]
        const dueDateInput = taskButton.children[1].children[1]
    
        UI.closeAllPopups()
        dueDate.classList.add('active')
        dueDateInput.classList.add('active')
    }
    
    static closeSetDateInput(taskButton) {
        const dueDate = taskButton.children[1].children[0]
        const dueDateInput = taskButton.children[1].children[1]
    
        dueDate.classList.remove('active')
        dueDateInput.classList.remove('active')
      }

    static renameTask(e) {
        if (e.key !== 'Enter') return

        const projectName = document.querySelector('.project-name').textContent
        const taskName = this.previousElementSibling.textContent
        const newTaskName = this.value

        if (newTaskName === '') {
          alert("Task name can't be empty")
          return
        }

        if (Storage.getTodoList().getProject(projectName).contains(newTaskName)) {
          this.value = ''
          alert('Task names must be different')
          return
        }

        Storage.renameTask(projectName, taskName, newTaskName)

        UI.clearTasks()
        UI.loadTasks(projectName)
        UI.closeRenameInput(this.parentNode.parentNode)
    }

    static setTaskDate() {
        const taskButton = this.parentNode.parentNode
        const projectName = document.querySelector('.project-name').textContent
        const taskName = taskButton.children[0].children[1].textContent
        const newDueDate = format(new Date(this.value), 'dd/MM/yyyy')

        Storage.setTaskDate(projectName, taskName, newDueDate)
 
        UI.clearTasks()
        UI.loadTasks(projectName)
        UI.closeSetDateInput(taskButton)
    }

    // Add Task button event handlers
    static initAddTaskButtons() {
        const addTaskButton = document.querySelector('.add-tasks-button')
        const addTaskPopupButton = document.querySelector('.add-tasks-popup-button')
        const cancelTaskPopupButton = document.querySelector(
          '.cancel-tasks-popup-button'
        )
        const addTaskPopupInput = document.querySelector('.add-tasks-popup-input')

        addTaskButton.addEventListener('click', UI.openAddTaskPopup)
        addTaskPopupButton.addEventListener('click', UI.addTask)
        cancelTaskPopupButton.addEventListener('click', UI.closeAddTaskPopup)
        addTaskPopupInput.addEventListener('keypress', UI.handleAddTaskPopupInput)
    }

    static openAddTaskPopup() {
        const addTaskButton = document.querySelector('.add-tasks-button')
        const addTaskPopup = document.querySelector('.add-tasks-popup')

        UI.closeAllPopups();
        addTaskButton.classList.add('active')
        addTaskPopup.classList.add('active')
    }

    static addTask() {
        const projectName = document.querySelector('.project-name').textContent
        const addTaskPopupInput = document.querySelector('.add-tasks-popup-input')
        const taskName = addTaskPopupInput.value

        const addTaskPopupInputDate = document.querySelector('.add-tasks-popup-input-date')
        let date = addTaskPopupInputDate.value

        if (Storage.getTodoList().getProject(projectName).contains(taskName)) {
            addTaskPopupInput.value = ''
            alert('Project names must be different')
            return
        }

        date = (date === '' ? 'No date' : date)
        Storage.addTask(projectName, new Task(taskName, date))
        UI.createTask(taskName, date, false)
        UI.closeAddTaskPopup();

    }

    static closeAddTaskPopup() {
        const addTaskButton = document.querySelector('.add-tasks-button')
        const addTaskPopup = document.querySelector('.add-tasks-popup')
        const addTaskPopupInput = document.querySelector('.add-tasks-popup-input')

        addTaskButton.classList.remove('active')
        addTaskPopup.classList.remove('active')
        addTaskPopupInput.value = ''
    }

    static handleAddTaskPopupInput(e) {
        if (e.key === 'Enter') UI.addTask()
    }
}