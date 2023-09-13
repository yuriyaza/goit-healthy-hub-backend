const { Users } = require('./usersDBModel')
const { authAllSchema } = require('./authValidationSchemas');
const { authEmailSchema } = require('./authValidationSchemas');

module.exports = {
    Users,
    authAllSchema,
    authEmailSchema,
};
