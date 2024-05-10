const express = require('express')
const app = express()
const port = 8081

const route = require("./routes/route.js")
const staticRoute = require("./routes/staticRoute.js")

const path = require("path")

app.set("view engine","ejs")
app.set("views","./views")

app.use(express.urlencoded({extended : false}))
app.use(express.static(path.resolve("./public")))

// routes
app.use("/",route)
app.use("/",staticRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))