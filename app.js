const express = require('express')
const cors = require('cors')

const app = express()

const templates = [
    { order: 1, title: "Forrest Gump", url: "https://m.media-amazon.com/images/I/31M9F+VrAWL._AC_.jpg", rating: "4", year: "1994" },
    { order: 1, title: "The Big Lebowski", url: "https://i.pinimg.com/564x/94/c0/25/94c02573dec058d69b22512abd21f1ba.jpg", rating: "5", year: "1998" },
    { order: 1, title: "Ghost in the Shell", url: "https://d3tvwjfge35btc.cloudfront.net/Assets/39/608/L_p0151960839.jpg", rating: "3", year: "1995" }
]

const userMovs = [
    
]

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const logger = (req,res,next) =>{
    const method = req.method
    const url = req.url
    const time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes();
    let month = ("0" + (time.getMonth() + 1)).slice(-2);
    let date = ("0" + time.getDate()).slice(-2);
    console.log(date + "-" + month + " " + hours + ":" + minutes);
    next()

}

app.get('/templates', logger, (req, res) => {
    res.json(templates)
    
})

app.get('/usrmovs', (req, res) => {
    res.json(userMovs)
    
})

app.post('/nmov', (req,res) => {
    console.log(req.body);
    userMovs.push(req.body)
    res.status(201).send({success:true})
})

app.listen(5000, () => {
    console.log('server listening on port 5000 :)');
})