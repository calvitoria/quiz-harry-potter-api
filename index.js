const express = require("express")
const app = express();
const port = process.env.PORT || 3000

const quiz = require("./src/quiz/quiz.json")
app.get("/quiz", (req, res) => {
    return res.json(quiz)
})

app.listen(port, () => {
    console.log('server is running...')
})