const app = require("express")
const router = app.Router()
const sendemail = require("../controller/contactcontroller")
router.post("/send", sendemail)
module.exports = router