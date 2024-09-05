function greeter (person: string) {
  return "Hello, " + person
}

let user = [0, 1, 2]
// greeter(user)

let list: Array<number> = [1, 2, 3]

class KeyValue<T, U> {
  private _key: T
  private _value: U

  set key(_k: T) {
    this._key = _k
  }

  get key(): T {
    return this._key
  }

  set value(_v: U) {
    this._value = _v
  }

  get value(): U {
    return this._value
  }
}

let kv = new KeyValue<string, number>()
kv.key = 1; kv.value = "value"

let kv2 = new KeyValue<string, number>()
kv2.key = 1; kv2.value = "value"

let kv3 = new KeyValue<string, number>()
kv3.key = 1; kv3.value = "value"

// extending class
class PersonTree<T extends Person> {
  value: T
  left: Tree<T>
  right: Tree<T>
}

