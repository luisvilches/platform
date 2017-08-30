/**
 * Created by luisvilches on 30-08-17.
 */

const jwt = require('jwt-simple');
const moment = require('moment');

exports.createTokens = (user) => {
    let payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
        username: user.name,
    };

    return jwt.encode(payload,config.TOKEN_SECRET);
}