export default class Task {
    constructor(name, date = 'No date', status = false) {
        this.name = name;
        this.date = date;
        this.status = status;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getDate() {
        return this.date;
    }

    setDate(date) {
        this.date = date;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status
;    }
}