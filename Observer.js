"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
class EventManager {
    observerList = [];
    addObserver(observer) {
        this.observerList.push(observer);
    }
    removeObserver(observer) {
        this.observerList = this.observerList.filter((obs) => obs !== observer);
    }
    notifyObservers(event) {
        this.observerList.forEach((observer) => {
            observer.update(event);
        });
    }
    newEvent(event) {
        console.log(`\x1b[1m\x1b[32mNew event: ${event}\x1b[0m`);
        this.notifyObservers(event);
    }
}
exports.EventManager = EventManager;
