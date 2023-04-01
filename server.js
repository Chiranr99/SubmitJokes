const cors = require("cors")
const express = require("express")
const mongooseMorgan = require("mongoose-morgan")
const db = require("./models")
const app = express()
app.use(cors())
app.use(express.json())

app.use(mongooseMorgan({
    connectionString: db.url,
}))

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected")
    })
    .catch((err) => {
        console.log("Err", err)
        process.exit()
    })

require("./routes/submit.route")(app)

app.get("/", (req, res) => {
    res.json("welcome")
})
const PORT = process.env.PORT || 8096
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})