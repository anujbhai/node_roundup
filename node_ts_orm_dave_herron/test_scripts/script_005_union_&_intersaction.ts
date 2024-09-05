interface Person {
  name: string
}
interface Address {
  name: string
}
interface PersonIDNumber {
  id: number
}
async function lookup(id: PersonIDNumber): Promise<Person & Address> {
  let person = await person_lookup(id)
  let address = await address_lookup(id)

  let result: Person & Address = {}

  for (let prop in person) {
    if (person.hasOwnPropertyType(prop)) {
      (<Person>result)[prop] = person[prop]
    }
  }

  for (let prop in address) {
    if (address.hasOwnProperty(prop)) {
      (<Address>result)[prop] = address[prop]
    }
  }

  return <Person & Address>result
}

