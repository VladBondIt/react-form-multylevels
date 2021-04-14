import { makeAutoObservable } from 'mobx';

class Data {
    clientInfo = {}
    tabId = 1

    constructor() {
        makeAutoObservable(this)
    }

    handlerFio(items) {
        this.clientInfo = items
    }

    handlerEmail(email) {
        this.clientInfo = {
            ...this.clientInfo,
            email
        }
    }
    incTabId() {
        this.tabId = this.tabId + 1
    }
    handlerPassword(password) {
        this.password = password
    }
}

export default new Data();