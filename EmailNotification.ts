import { Observer } from "./Observer";

export class EmailNotification implements Observer {
  public update(event: string): void {
    console.log(`${EmailNotification.name} - ${event}`);
  }
}
