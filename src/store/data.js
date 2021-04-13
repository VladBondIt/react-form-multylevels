import { makeAutoObservable } from 'mobx';

class Data {
    fio = {}
    tabId = 1

    constructor() {
        makeAutoObservable(this)
    }

    handlerFio(items) {
        this.fio = items
    }

    handlerEmail(email) {
        this.email = email
    }
    incTabId() {
        this.tabId = this.tabId + 1
    }
}

export default new Data();