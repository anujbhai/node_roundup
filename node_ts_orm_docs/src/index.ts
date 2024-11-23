import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Photo } from "./entity/Photo"

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)
    //
    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)
    //
    // console.log("Here you can setup and run express / fastify / any other framework.")
  console.log("Inserting a new photo into the database...")
  
  const photo = new Photo()

  photo.name = "photo1"
  photo.description = "Lorem ipsum dolor sit amet adipicing elit volputate."
  photo.filename = "photo1.jpeg"
  photo.views = 1
  photo.isPublished = true


}).catch(error => console.log(error))
