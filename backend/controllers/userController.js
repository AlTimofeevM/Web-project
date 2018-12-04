const db = require('./dbController')



module.exports.getUser= function(req,res){
    let username = req.user.name.givenName + ' ' + req.user.name.familyName
    let img = req.user.picture
    res.status(200).send({Username : username, Img : img})
}   