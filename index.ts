import { EmailNotification } from "./EmailNotification"
import { EventManager, Observer } from "./Observer"
import { SMSNotification } from "./SMSNotification"

class Main {
    public static main(args: string[]) {
        const eventManager: EventManager = new EventManager()

        const smsObserver: Observer = new SMSNotification()
        const emailNotification: Observer = new EmailNotification()
        
        eventManager.addObserver(smsObserver)
        eventManager.addObserver(emailNotification)
        
        function notify(time: number = 10000): void {
            setTimeout(() => {
                eventManager.newEvent("\x1b[33m[Event] System Update\x1b[0m")
            }, time)
        }

        notify()
        
    }
}

Main.main(['olá!'])