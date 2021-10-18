const express = require('express')
const cors = require('cors')

const app = express()

const templates = [
    { order: 1, title: "Forrest Gump", url: "https://m.media-amazon.com/images/I/31M9F+VrAWL._AC_.jpg", rating: "4", year: "1994" },
    { order: 1, title: "The Big Lebowski", url: "https://i.pinimg.com/564x/94/c0/25/94c02573dec058d69b22512abd21f1ba.jpg", rating: "5", year: "1998" },
    { order: 1, title: "Ghost in the Shell", url: "https://d3tvwjfge35btc.cloudfront.net/Assets/39/608/L_p0151960839.jpg", rating: "3", year: "1995" }
]

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/templates', (req, res) => {
    res.json(templates)
    
})

app.listen(5000, () => {
    console.log('server listening on port 5000 :)');
})