import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth(
    {
        audience: "http://localhost:8010",
        issuerBaseURL: "https://dev-qthw15.us.auth0.com",
        tokenSigningAlg: "RS256"
    }
)
export default jwtCheck