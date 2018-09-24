const postModel = require('models/User')

function update(req, res, next) {
    const {id} = req.params

    postModel.updateOne({"_id": id}, {...req.body}, (err, docs) => {
        if(err) res.status(500).end()
        return res.send("succesfully saved");
    })
    res.end('end')
}

module.exports = update;