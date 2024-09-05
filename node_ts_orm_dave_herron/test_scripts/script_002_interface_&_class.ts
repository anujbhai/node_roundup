// interface
interface SquareConfig {
  color?: string
  width?: number
}

// class``
class Animal {
  private name: string

  constructor (theName: string) {
    this.name = theName
  }
}

class Rhino extends Animal {
  constructor () {
    super("Rhino")
  }
}

// abstract class
abstract class Animal_abs {
  abstract make_sound(): void

  move(): void {
    console.log("...roaming the earth")
  }
}

