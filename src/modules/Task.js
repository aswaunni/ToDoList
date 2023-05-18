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
    }

    getDateFormatted() {
        const day = this.date.split('/')[0]
        const month = this.date.split('/')[1]
        const year = this.date.split('/')[2]
        return `${month}/${day}/${year}`
      }
}