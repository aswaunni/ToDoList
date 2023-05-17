(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(81),a=n.n(o),s=n(645),r=n.n(s)()(a());r.push([t.id,":root {\n    --primary-dark: #100858;\n    --secondary-dark: #342e68;\n    --primary-light: #c8c5e2;\n    --secondary-light: #a7a2ce;\n  }\n  \n* ,\n*::after,\n*::before {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    position: relative;\n    min-height: 100%;\n}\n\nbody {\n    background-color: var(--primary-light);\n    color: var(--primary-dark);\n    font-family: 'Roboto', sans-serif;\n    line-height: 1.6;\n}\n\nbutton, input {\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    border: none;\n    outline: none;\n    width: 100%;\n    border-radius: 8px;\n}\n\nbutton {\n    cursor: pointer;\n    padding: 10px 20px;\n}\n\ninput {\n    padding: 10px;\n}\n\ni {\n    margin-right: 10px;\n}\n\n/* header */\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n    background-color: var(--primary-dark);\n    color: var(--primary-light);\n}\n\n.page-name {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: 'Yusei Magic', sans-serif;\n    font-size: 40px;  \n}\n\n.todo-logo {\n    font-size: 40px;\n}\n\n/* main*/\nmain {\n    display: flex;\n    min-height: calc(100vh - 108px);\n}\n\n/* nav */\nnav {\n    width: 300px;\n    min-width: 250px;\n    padding: 20px;\n    background-color: var(--secondary-light);\n}\n\nnav.active {\n    display: block;\n}\n\n.default-projects-button {\n    background-color: var(--secondary-light);\n    text-align: left;\n}\n\n.projects-name {\n    padding: 20px;\n}\n\n.project-button {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: var(--secondary-light);\n    text-align: left;\n}\n\n.add-projects-button {\n    background-color: var(--secondary-light);\n    text-align: left;\n}\n\n.add-projects-button.active {\n    display: none;\n  }\n\n.default-projects-button:hover,\n.project-button:hover,\n.add-projects-button:hover {\n    background-color: var(--primary-light);\n}\n\n.right-project-button {\n    visibility: hidden;\n}\n\n.project-button:hover .right-project-button {\n    visibility: visible;\n}\n\n.add-projects-popup {\n    display: none;\n    width: 100%;\n    padding: 10px;\n    text-align: center;\n}\n\n.add-projects-popup.active {\n    display: block;\n}\n\n.add-projects-popup-input {\n    border: 1px solid #aaa;\n    margin-bottom: 10px;\n}\n\n.add-projects-popup-buttons {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 20px;\n}\n\n.add-projects-popup-button {\n    border: 1px solid #99dd99;\n    background-color: #80aa80;\n    font-weight: bold;\n}\n\n.cancel-projects-popup-button {\n    border: 1px solid #eeadad;\n  background-color: #c08c8c;\n  font-weight: bold;\n}\n\n.add-projects-popup-button:hover {\n    background-color: #a6f0a6;\n  }\n  \n  .cancel-projects-popup-button:hover {\n    background-color: #f5b2b2;\n  }\n\n  /* tasks */\n\n  .projects-preview {\n    width: 900px;\n    padding: 20px 40px;\n    margin: 0 auto;\n  }\n\n  .projects-preview h1 {\n    padding: 0 10px;\n    margin-bottom: 10px;\n  }\n\n\n\n.button-task {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n    background-color: var(--primary-light);\n    cursor: default;\n  }\n\n\n.button-task:hover {\n    background-color: var(--secondary-light);\n  }\n\n  .task-logo {\n    font-size: 24px;\n    cursor: pointer;\n  }\n\n.input-task-name {\n    display: none;\n    height: 24px;\n    padding: 5px;\n    border: 1px solid #555;\n    background-color: var(--primary-light);\n    color: inherit;\n    font-family: inherit;\n  }\n\n  .task-logo {\n    color:rgba(255, 0, 0, 0.644);\n    font-weight: bold;\n  }\n\n  .task-logo.active {\n    color: rgba(0, 128, 0, 0.822);\n  }\n\n.left-task-panel {\n    display: flex;\n    align-items: center;\n  }\n\n.right-task-panel {\n    display: flex;\n    align-items: center;\n  }\n\n  .input-task-name.active {\n    display: block;\n  }\n  \n  .due-date {\n    margin-right: 10px;\n    cursor: pointer;\n  }\n  \n  .due-date.active {\n    display: none;\n  }\n  \n  .input-due-date {\n    display: none;\n    height: 24px;\n    padding: 5px;\n    border: 1px solid #555;\n    margin: 0 10px;\n    background-color: var(--primary-light);\n    color: inherit;\n    font-family: inherit;\n  }\n  \n  .input-due-date.active {\n    display: block;\n  }\n\n  .button-task .right-task-panel i {\n    visibility: hidden;\n    cursor: pointer;\n  }\n  \n  .button-task:hover .right-task-panel i {\n    visibility: visible;\n  }\n\n  .task-content {\n    cursor: pointer;\n  }\n\n  .task-content.active {\n    display: none;\n  }  \n\n  .task-content.done {\n    text-decoration: line-through;\n  }\n\n  .add-tasks-button {\n    display: block;\n    padding-left: 15px;\n    margin-top: 10px;\n    text-align: left;\n  }\n  \n  .add-tasks-button:hover {\n    background-color: var(--secondary-light);\n  }\n\n  .clear-tasks-button {\n    padding-left: 15px;\n    margin-top: 10px;\n    text-align: left;\n  }\n  \n  .clear-tasks-button:hover {\n    background-color: var(--secondary-light);\n  }\n  \n  .add-tasks-popup {\n    display: none;\n    width: 100%;\n    padding: 10px;\n    text-align: center;\n  }\n  \n  .add-tasks-popup.active {\n    display: block;\n  }\n  \n  .add-tasks-popup-input {\n    border: 1px solid #aaa;\n    margin-bottom: 10px;\n  }\n  \n  .add-tasks-popup-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    gap: 20px;\n  }\n\n  .task-control-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    gap: 20px;\n  }\n  \n  .task-control-buttons.active {\n    display: none;\n  }\n  \n  .add-tasks-popup-button {\n    border: 1px solid #99dd99;\n    background-color: #aaffaa;\n    font-weight: bold;\n  }\n  \n  .cancel-tasks-popup-button {\n    border: 1px solid #eeadad;\n    background-color: #ffbebe;\n    font-weight: bold;\n  }\n  \n  .add-tasks-popup-button:hover {\n    background-color: #a6f0a6;\n  }\n  \n  .cancel-tasks-popup-button:hover {\n    background-color: #f5b2b2;\n  }",""]);const c=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,a,s){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(r[i]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);o&&r[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var s={},r=[],c=0;c<t.length;c++){var i=t[c],d=o.base?i[0]+o.base:i[0],l=s[d]||0,p="".concat(d," ").concat(l);s[d]=l+1;var u=n(p),h={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=a(h,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}r.push(p)}return r}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var s=o(t=t||[],a=a||{});return function(t){t=t||[];for(var r=0;r<s.length;r++){var c=n(s[r]);e[c].references--}for(var i=o(t,a),d=0;d<s.length;d++){var l=n(s[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}s=i}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var s=e[o]={id:o,exports:{}};return t[o](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),a=n.n(o),s=n(569),r=n.n(s),c=n(565),i=n.n(c),d=n(216),l=n.n(d),p=n(589),u=n.n(p),h=n(426),m={};m.styleTagTransform=u(),m.setAttributes=i(),m.insert=r().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;class k{constructor(t){this.name=t,this.tasks=[]}getName(){return this.name}setName(t){this.name=t}getTasks(){return this.tasks}setTasks(t){this.tasks=t}getTask(t){return this.tasks.find((e=>e.getName()===t))}addTask(t){this.tasks.find((e=>e.getName()===t.name))||this.tasks.push(t)}setTaskStatus(t,e){this.tasks.map((n=>{n.name===t&&n.setStatus(e)}))}contains(t){return this.tasks.some((e=>e.getName()===t))}deleteTask(t){const e=this.tasks.find((e=>t===e.name));this.tasks.splice(this.tasks.indexOf(e),1)}clearCompletedTasks(){this.tasks=this.tasks.filter((t=>!1===t.status))}}class g{constructor(){this.projects=[],this.projects.push(new k("Inbox")),this.projects.push(new k("Today")),this.projects.push(new k("This week"))}getProjects(){return this.projects}setProjects(t){this.projects=t}addProject(t){this.projects.find((e=>t.name===e.name))||this.projects.push(t)}getProject(t){return this.projects.find((e=>e.getName()===t))}contains(t){return this.projects.some((e=>e.getName()===t))}deleteProject(t){const e=this.projects.find((e=>t===e.name));this.projects.splice(this.projects.indexOf(e),1)}}class v{constructor(t,e="No date",n=!1){this.name=t,this.date=e,this.status=n}getName(){return this.name}setName(t){this.name=t}getDate(){return this.date}setDate(t){this.date=t}getStatus(){return this.status}setStatus(t){this.status=t}}class b{static getTodoList(){try{const t=Object.assign(new g,JSON.parse(localStorage.getItem("TodoList")));return t.setProjects(t.getProjects().map((t=>Object.assign(new k,t)))),t.getProjects().forEach((t=>t.setTasks(t.getTasks().map((t=>Object.assign(new v,t)))))),t}catch{return new g}}static saveTodoList(t){localStorage.setItem("TodoList",JSON.stringify(t))}static addProject(t){const e=this.getTodoList();e.addProject(t),b.saveTodoList(e)}static setTaskStatus(t,e,n){const o=this.getTodoList();o.getProject(t).setTaskStatus(e,n),b.saveTodoList(o)}static deleteProject(t){const e=this.getTodoList();e.deleteProject(t),b.saveTodoList(e)}static clearCompletedTasks(t){const e=this.getTodoList();e.getProject(t).clearCompletedTasks(),b.saveTodoList(e)}static addTask(t,e){const n=this.getTodoList();n.getProject(t).addTask(e),b.saveTodoList(n)}static deleteTask(t,e){const n=this.getTodoList();n.getProject(t).deleteTask(e),b.saveTodoList(n)}static renameTask(t,e,n){const o=this.getTodoList();o.getProject(t).getTask(e).setName(n),b.saveTodoList(o)}static setTaskDate(t,e,n){const o=this.getTodoList();o.getProject(t).getTask(e).setDate(n),b.saveTodoList(o)}static updateTodayProject(){}static updateWeekProject(){}}class f{static loadHomePage(){f.loadProjects(),f.initProjectButtons()}static loadProjects(){b.getTodoList().getProjects().forEach((t=>{"Inbox"!==t.name&&"Today"!==t.name&&"This week"!==t.name&&f.createProject(t.name)})),f.initAddProjectButtons()}static closeAllInputs(){document.querySelectorAll("[data-task-button]").forEach((t=>{f.closeRenameInput(t),f.closeSetDateInput(t)}))}static closeAllPopups(){f.closeAddProjectPopup(),document.querySelector(".add-tasks-button")&&f.closeAddTaskPopup(),document.querySelector(".tasks-list")&&""!==document.querySelector(".tasks-list").innerHTML&&f.closeAllInputs()}static clearProjects(){document.querySelector(".projects-list").innerHTML=""}static clearTasks(){document.querySelector(".tasks-list").innerHTML=""}static loadProjectContent(t){const e=document.querySelector(".projects-preview");e.innerHTML=`\n            <h1 class="project-name">${t}</h1>\n            <div class="tasks-list"></div>`,"Today"!==t&&"This week"!==t&&(e.innerHTML+='\n                <div class="task-control-buttons">\n                    <button class="add-tasks-button">\n                        <i class="material-icons add-tasks-logo">add</i>\n                        Add Task\n                    </button>\n                    <button class="clear-tasks-button">\n                        <i class="material-icons clear-tasks-logo">clear_all</i>\n                        Clear Completed Tasks\n                    </button>\n                </div>\n                <div class="add-tasks-popup">\n                    <input class="add-tasks-popup-input" type="text" required>\n                    <input class="add-tasks-popup-input-date" type="date" required>\n                    <div class="add-tasks-popup-buttons">\n                        <button class="add-tasks-popup-button">Add</button>\n                        <button class="cancel-tasks-popup-button">Cancel</button>\n                    </div>\n                </div>'),f.loadTasks(t)}static loadTasks(t){b.getTodoList().getProject(t).getTasks().forEach((t=>f.createTask(t.name,t.date,t.status))),"Today"!==t&&"This week"!==t&&f.initAddTaskButtons()}static createProject(t){document.querySelector(".projects-list").innerHTML+=`\n            <button class="project-button">\n                <div class="left-project-button">\n                    <i class="material-icons project-logo">checklist</i>\n                    <span>${t}</span>\n                </div>\n                <div class="right-project-button">\n                    <i class="material-icons project-delete-logo">close</i>\n                </div>\n            </button>`,f.initProjectButtons()}static createTask(t,e,n){document.querySelector(".tasks-list").innerHTML+=`\n          <button class="button-task" data-task-button>\n            <div class="left-task-panel">\n              <i class="material-icons task-logo ${n?"active":""}">done_outline</i>\n              <p class="task-content ${n?"done":""}">${t}</p>\n              <input type="text" class="input-task-name" data-input-task-name>\n            </div>\n            <div class="right-task-panel">\n              <p class="due-date" id="due-date">${e}</p>\n              <input type="date" class="input-due-date" data-input-due-date>\n              <i class="material-icons task-delete-logo">close</i>\n            </div>\n          </button>`,f.initTaskButtons()}static initProjectButtons(){document.querySelector(".inbox-button"),document.querySelector("today-button"),document.querySelector("week-button"),document.querySelectorAll(".project-button").forEach((t=>{t.addEventListener("click",f.handleProjectButton)}))}static handleProjectButton(t){const e=this.children[0].children[1].textContent;t.target.classList.contains("project-delete-logo")?f.deleteProject(e,this):f.openProject(e,this)}static openProject(t,e){[...document.querySelectorAll(".default-projects-button"),...document.querySelectorAll(".project-button")].forEach((t=>t.classList.remove("active"))),e.classList.add("active"),f.closeAddProjectPopup(),f.loadProjectContent(t)}static deleteProject(t){b.deleteProject(t),f.clearProjects(),f.loadProjects()}static initAddProjectButtons(){const t=document.querySelector(".add-projects-button"),e=document.querySelector(".add-projects-popup-input"),n=document.querySelector(".add-projects-popup-button"),o=document.querySelector(".cancel-projects-popup-button");t.addEventListener("click",f.openAddProjectPopup),e.addEventListener("keypress",f.handleAddProjectPopupInput),n.addEventListener("click",f.addProject),o.addEventListener("click",f.closeAddProjectPopup)}static openAddProjectPopup(){const t=document.querySelector(".add-projects-button"),e=document.querySelector(".add-projects-popup");f.closeAllPopups(),t.classList.add("active"),e.classList.add("active")}static handleAddProjectPopupInput(t){"Enter"==t.key&&f.addProject()}static addProject(){const t=document.querySelector(".add-projects-popup-input"),e=t.value;if(b.getTodoList().contains(e))return t.value="",void alert("Project names must be different");b.addProject(new k(e)),f.createProject(e),f.closeAddProjectPopup()}static closeAddProjectPopup(){const t=document.querySelector(".add-projects-button"),e=document.querySelector(".add-projects-popup"),n=document.querySelector(".add-projects-popup-input");t.classList.remove("active"),e.classList.remove("active"),n.value=""}static initTaskButtons(){const t=document.querySelectorAll("[data-task-button]"),e=document.querySelectorAll("[data-input-task-name"),n=document.querySelectorAll("[data-input-due-date");t.forEach((t=>t.addEventListener("click",f.handleTaskButton))),e.forEach((t=>t.addEventListener("keypress",f.renameTask))),n.forEach((t=>t.addEventListener("change",f.setTaskDate)))}static handleTaskButton(t){t.target.classList.contains("task-logo")?f.setTaskCompleted(this):t.target.classList.contains("task-delete-logo")?f.deleteTask(this):t.target.classList.contains("task-content")?f.openRenameInput(this):t.target.classList.contains("due-date")&&f.openSetDateInput(this)}static setTaskCompleted(t){const e=document.querySelector(".project-name").textContent,n=t.children[0].children[1].textContent,o=t.children[0].children[0],a=t.children[0].children[1];let s=!1;o.classList.contains("active")?(o.classList.remove("active"),a.classList.remove("done")):(o.classList.add("active"),a.classList.add("done"),s=!0),b.setTaskStatus(e,n,s)}static deleteTask(t){const e=document.querySelector(".project-name").textContent,n=t.children[0].children[1].textContent;b.deleteTask(e,n),f.clearTasks(),f.loadTasks(e)}static openRenameInput(t){const e=t.children[0].children[1];let n=e.textContent;const o=t.children[0].children[2];t.parentNode.parentNode.children[0].textContent,f.closeAllPopups(),e.classList.add("active"),o.classList.add("active"),o.value=n}static closeRenameInput(t){const e=t.children[0].children[1],n=t.children[0].children[2];e.classList.remove("active"),n.classList.remove("active"),n.value=""}static openSetDateInput(t){const e=t.children[1].children[0],n=t.children[1].children[1];f.closeAllPopups(),e.classList.add("active"),n.classList.add("active")}static closeSetDateInput(t){const e=t.children[1].children[0],n=t.children[1].children[1];e.classList.remove("active"),n.classList.remove("active")}static renameTask(t){if("Enter"!==t.key)return;const e=document.querySelector(".project-name").textContent,n=this.previousElementSibling.textContent,o=this.value;if(""!==o){if(b.getTodoList().getProject(e).contains(o))return this.value="",void alert("Task names must be different");b.renameTask(e,n,o),f.clearTasks(),f.loadTasks(e),f.closeRenameInput(this.parentNode.parentNode)}else alert("Task name can't be empty")}static setTaskDate(){const t=this.parentNode.parentNode,e=document.querySelector(".project-name").textContent,n=t.children[0].children[1].textContent,o=format(new Date(this.value),"dd/MM/yyyy");b.setTaskDate(e,n,o),f.clearTasks(),f.loadTasks(e),f.closeSetDateInput(t)}static initAddTaskButtons(){const t=document.querySelector(".add-tasks-button"),e=document.querySelector(".clear-tasks-button"),n=document.querySelector(".add-tasks-popup-button"),o=document.querySelector(".cancel-tasks-popup-button"),a=document.querySelector(".add-tasks-popup-input");t.addEventListener("click",f.openAddTaskPopup),e.addEventListener("click",f.clearCompletedTasks),n.addEventListener("click",f.addTask),o.addEventListener("click",f.closeAddTaskPopup),a.addEventListener("keypress",f.handleAddTaskPopupInput)}static openAddTaskPopup(){const t=document.querySelector(".task-control-buttons"),e=document.querySelector(".add-tasks-popup");f.closeAllPopups(),t.classList.add("active"),e.classList.add("active")}static clearCompletedTasks(){const t=document.querySelector(".project-name").textContent;b.clearCompletedTasks(t),f.clearTasks(),f.loadTasks(t)}static addTask(){const t=document.querySelector(".project-name").textContent,e=document.querySelector(".add-tasks-popup-input"),n=e.value;let o=document.querySelector(".add-tasks-popup-input-date").value;if(b.getTodoList().getProject(t).contains(n))return e.value="",void alert("Project names must be different");o=""===o?"No date":o,b.addTask(t,new v(n,o)),f.createTask(n,o,!1),f.closeAddTaskPopup()}static closeAddTaskPopup(){const t=document.querySelector(".task-control-buttons"),e=document.querySelector(".add-tasks-popup"),n=document.querySelector(".add-tasks-popup-input");t.classList.remove("active"),e.classList.remove("active"),n.value=""}static handleAddTaskPopupInput(t){"Enter"===t.key&&f.addTask()}}f.loadHomePage()})()})();