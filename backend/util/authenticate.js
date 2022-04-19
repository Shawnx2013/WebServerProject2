// const jwt = require('jsonwebtoken');

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1];

//     if (token == null) return res.sendStatus(401);

//     jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        
//         if (err) {
//             console.log(err);
//             return res.status(403).send();
//         }

//         req.user = user;

//         next();
//     })
// }

const express = require('express');
const { auth } = require('express-oauth2-jwt-bearer');

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: 'https://localhost:8080/api',
    issuerBaseURL: `https://dev-8bqfizw3.us.auth0.com/`,
});

module.exports = checkJwt;