const UserManager = require("../models/UserManager");

exports.register = (req, res) => {
    if((!req.body.username || !req.body.password || !req.body.confirmPassword) && req.body.password != req.body.confirmPassword) return res.redirect('/register');
    const user = UserManager.createUser(req.body.username, req.body.password);
    return res.redirect('/login');
}