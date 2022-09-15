class Signalton {
  private static instance: Signalton

  private constructor() {}

  public static getInstance(): Signalton {
    if (!Signalton.instance) {
      Signalton.instance = new Signalton()
    }
    return Signalton.instance
  }
}

// test
function clientCode() {
  const s1 = Signalton.getInstance()
  const s2 = Signalton.getInstance()

  if (s1 === s2) {
    console.log('singleton works')
  } else {
    console.log('singleton failed')
  }
}
clientCode()
