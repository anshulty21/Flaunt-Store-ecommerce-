const { Cookie } = require("express-session");
const { session } = require("passport");

dbPassword = 'mongodb://127.0.0.1:27017/myproject?retryWrites=true';

module.exports = {
    mongoURI: dbPassword
};

session: {
    CookieKey:'anshultyagi'
}