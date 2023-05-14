/**
 * JWT (json web token)
 * JWT: secure your api
 * ---------------------------
 * CREATE TOKEN
 * ---------------------------
 * 1. client: after user login send user basic info to create token
 * 2. in the server side: install npm i jsonwebtoken
 * 3. import jsonwebtoken
 * 4.jwt.sign(payload, secret, {expiresIn})
 * 5. return token to the client side
 * 6. after receiving the token store it either http only cookies or localstorage(localstorage is second best way)
 * 7.use a general space onAuthStateChange > AuthProvider
 * ---------------------------
 * SEND TOKEN TO THE SREVER
 * -----------------------------
 * 1. for sensitive api call () send authorization headers
 * {authorization: "Bearer token"}
 * -----------------------
 *      VERIFY TOKEN
 * -----------------------
 * 1. Create a fnction called verifyJWT (middleware)
 * 2. this function will have three params: req, res, next
 * 3. first check whether the authorization headers exists
 * 4. if not send 401
 * 5.get the token out of the authorization header
 * 6. call jwt.verify(token, secret, (error, decoded))
 * 7. if error send 401
 * 8. set decoded to the req object so that we can retrieve it later
 * 9. call the next() to go to the next function
 * ----------------------------------
 * 1. check wether token has the email that mathces with the request email
 * 
 * 
*/