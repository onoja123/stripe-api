require("dotenv").config()
const express = require("express")
const app = express()

app.use(express.json())

const stripe = require("stripe")(process.env.STRIPE_KEY)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})