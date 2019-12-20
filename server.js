const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const cors = require("cors")
const config = require("./src/auth_config.json");

// Create a new Express app
const app = express();
app.use(cors())
// Set up Auth0 configuration
const authConfig = {
  domain: config.domain,
  audience: config.audience
};

// Define middleware that validates incoming bearer tokens
// using JWKS from dev-cdbz.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

app.get("/callback", (req,res)=>{
  res.send({"body": req.body})
})

// Start the app
app.listen(3001, () => console.log('API listening on 3001'));