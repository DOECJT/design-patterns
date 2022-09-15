abstract class Creator {
  public abstract factoryMethod(): Product

  public someOperation() {
    const product = this.factoryMethod()
    return product.operation()
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new CreateProduct1()
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new CreateProduct2()
  }
}

interface Product {
  operation(): string
}

class CreateProduct1 implements Product {
  operation(): string {
    return 'product1'
  }
}

class CreateProduct2 implements Product {
  operation(): string {
    return 'product2'
  }
}

function clientCode(ctor: Creator): void {
  console.log(ctor.someOperation())
}
clientCode(new ConcreteCreator1())
clientCode(new ConcreteCreator2())
