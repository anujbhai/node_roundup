interface Named {
  name: string
}

class Person {
  name: string
}

let p: Named

p = new Person()

// extending class name with interface
class PersonAnother implements Named {
  name: string
}

