var keenio = require('../services/keenio');

module.exports = function(req, res, next) {
    keenio.client.addEvent('/api/github', req.args);
    next();
};
