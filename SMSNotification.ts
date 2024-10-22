import { Observer } from "./Observer";

export class SMSNotification implements Observer {
  public update(event: string): void {
    console.log(`${SMSNotification.name} - ${event}`);
  }
}
