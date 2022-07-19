const { Cookie } = require("express-session");
const { session } = require("passport");

dbPassword = 'mongodb+srv://flstore:zJpNMCvPGL1c7aZw@cluster0.z6mpi4v.mongodb.net/?retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};

session: {
    CookieKey:'anshultyagi'
}
