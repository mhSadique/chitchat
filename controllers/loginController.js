function getLogin(req, res, next) { // this function is responsible for rendering the login page
    res.render("index");
}

module.exports = {
    getLogin
};