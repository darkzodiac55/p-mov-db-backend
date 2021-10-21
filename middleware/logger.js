const logger = (req,res,next) =>{
    const method = req.method
    const url = req.url
    const time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes();
    let month = ("0" + (time.getMonth() + 1)).slice(-2);
    let date = ("0" + time.getDate()).slice(-2);
    console.log(method, url ,date + "-" + month + " " + hours + ":" + minutes);
    next()

}

module.exports = logger