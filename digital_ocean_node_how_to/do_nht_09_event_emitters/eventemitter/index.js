const TicketManager = require("./ticket-manager")
const EmailService = require("./email-service")
const DatabaseService = require("./db-service")

const ticket_manager = new TicketManager(3)
const email_sevice = new EmailService()
const db_service = new DatabaseService()

ticket_manager.on("buy", (email, price, timeStamp) => {
  email_sevice.send(email)
  db_service.save(email, price, timeStamp)
})

ticket_manager.buy("test@mail.com", 10)
