const fs = require('fs/promises');
let userMovs = require('../usermovs.json')

const deleterMiddleware = async (req,res,next) => {
    let toDel = Number(req.params.id)
    /* for (const mov of userMovs) {
        if (mov.id === Number(req.params.id)) {
            console.log('mothereffer');
        }
    } */
    userMovs = userMovs.filter((ele)=>ele.id !== toDel)
    fs.writeFile('usermovs.json', JSON.stringify([...userMovs]))
}

module.exports = deleterMiddleware