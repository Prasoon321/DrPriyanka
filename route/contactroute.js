const app = require("express")
const router = app.Router()
const { sendemail, sendemailtestimony } = require("../controller/contactcontroller")
router.post("/send", sendemail)
router.post("/send/testimony", sendemailtestimony)
module.exports = router