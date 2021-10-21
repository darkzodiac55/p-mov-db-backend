const fs = require('fs/promises');
const userMovs = require('../usermovs.json')

const writerMiddleware = async (req,res,next) => {
    const {nmov} = req.body ////destructure out for security
    userMovs.push(nmov)
    if (!userMovs) {
        await fs.writeFile('usermovs.json', JSON.stringify(nmov))   
    } else {
        fs.writeFile('usermovs.json', JSON.stringify([...userMovs]))
    }
    next()
}

module.exports = writerMiddleware