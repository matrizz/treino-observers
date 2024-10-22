interface Observer {
  update(event: string): void;
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(event: string): void;
}

class EventManager implements Subject {
  private observerList: Observer[] = [];

  public addObserver(observer: Observer): void {
    this.observerList.push(observer);
  }
  public removeObserver(observer: Observer): void {
    this.observerList = this.observerList.filter((obs) => obs !== observer);
  }
  public notifyObservers(event: string): void {
    this.observerList.forEach((observer) => {
      observer.update(event);
    });
  }

  public newEvent(event: string): void {
    console.log(`\x1b[1m\x1b[32mNew event: ${event}\x1b[0m`);
    this.notifyObservers(event);
  }
}

export { Observer, Subject, EventManager };
