const TicketManager = require("./ticket-manager")

const ticket_manager = new TicketManager(10)

ticket_manager.on("buy", () => {
  console.log("Someone bought a ticket!")
})

ticket_manager.buy("test@email.com", 20)
ticket_manager.buy("test@email.com", 20)

ticket_manager.once("buy", () => {
  console.log("This is called only once.")
})

ticket_manager.buy("test@email.com", 20)
ticket_manager.buy("test@email.com", 20)

