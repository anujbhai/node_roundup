const TicketManager = require("./ticket-manager")
const EmailService = require("./email-service")
const DatabaseService = require("./db-service")

const ticket_manager = new TicketManager(3)
const email_sevice = new EmailService()
const db_service = new DatabaseService()

const on_buy = () => {
  console.log("I will be removed soon.")
}

ticket_manager.on("buy", (email, price, timeStamp) => {
  email_sevice.send(email)
  db_service.save(email, price, timeStamp)
})

ticket_manager.on("buy", on_buy)

ticket_manager.on("error", (error) => {
  console.error(`Sorry, we encountered the following error: ${error}`)
})

console.log(`We have ${ticket_manager.listenerCount("buy")} listener(s) for the buy event.`)
console.log(`We have ${ticket_manager.listenerCount("buy")} listener(s) for the error event.`)
console.log(`We added a new event listener, bringing our total count for the buy event to: ${ticket_manager.listenerCount("buy")}`)

ticket_manager.buy("test@email", 20)

ticket_manager.off("buy", on_buy)
console.log(`We now have: ${ticket_manager.listenerCount("buy")} listener(s) for the buy event.`)
ticket_manager.buy("test@email", 20)

ticket_manager.removeAllListeners("buy")
console.log(`We have ${ticket_manager.listenerCount("buy")} listener(s) for the buy event.`)

ticket_manager.buy("test@mail.com", 20)
console.log("The last ticket was bought.")
