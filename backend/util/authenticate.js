const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-8bqfizw3.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://dev-8bqfizw3.us.auth0.com/api/v2/',
  //issuer: 'https://dev-8bqfizw3.us.auth0.com/',
  algorithms: ['RS256']
});

module.exports = jwtCheck;