"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailNotification_1 = require("./EmailNotification");
const Observer_1 = require("./Observer");
const SMSNotification_1 = require("./SMSNotification");
class Main {
    static main(args) {
        const eventManager = new Observer_1.EventManager();
        const smsObserver = new SMSNotification_1.SMSNotification();
        const emailNotification = new EmailNotification_1.EmailNotification();
        eventManager.addObserver(smsObserver);
        eventManager.addObserver(emailNotification);
        function notify(time = 10000) {
            setTimeout(() => {
                eventManager.newEvent("\x1b[33m[Event] System Update\x1b[0m");
            }, time);
        }
        notify();
    }
}
Main.main(['olá!']);
