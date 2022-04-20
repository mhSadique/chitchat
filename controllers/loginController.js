function getLogin(req, res, next) { // this function is responsible for rendering the login page
    res.render("index", {
        title: "Login - chitchat"
    });
}

module.exports = {
    getLogin
};