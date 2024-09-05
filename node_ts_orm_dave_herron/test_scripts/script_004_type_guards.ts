interface Named {
  name: string
}

let name_object = {
  name: "Anuj"
}
// finding the type of an object
function is_named(obj: any): obj is Named {
  return (typeof obj === "object" && typeof obj.name === "string")
}

console.log(is_named(name_object))

