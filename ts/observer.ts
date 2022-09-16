interface Subject {
  attach(observer: Observer): void
  detach(observer: Observer): void
  notify(): void
}
class ConcreteSubject implements Subject {
  public state: number = 0
  private observers: Set<Observer> = new Set()
  
  attach(observer: Observer): void {
    const isExist = this.observers.has(observer)
    if (isExist) {
      return console.log('observer exist')
    }
    this.observers.add(observer)
  }
  detach(observer: Observer): void {
    const isExist = this.observers.has(observer)
    if (!isExist) {
      return console.log('observer is not exist')
    }
    this.observers.delete(observer)
  }
  notify(): void {
    this.observers.forEach((observer) => {
      observer.update(this)
    })
  }
  doSomething() {
    this.state++
    this.notify()
  }
}

interface Observer {
  update(subject: Subject): void
}
class ConcreteObserverA implements Observer {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject) {
      console.log(`observerA update: ${subject.state}`)
    }
  }
}
class ConcreteObserverB implements Observer {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject) {
      console.log(`observerB update: ${subject.state}`)
    }
  }
}

function clienCode() {
  const subject = new ConcreteSubject()
  const observerA = new ConcreteObserverA()
  const observerB = new ConcreteObserverB()
  subject.attach(observerA)
  subject.attach(observerB)
  subject.doSomething()
  subject.detach(observerA)
  subject.doSomething()
}
clienCode()
