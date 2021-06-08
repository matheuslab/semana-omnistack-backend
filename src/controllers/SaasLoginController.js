const connection = require('../database/connection');
const sign = require('jsonwebtoken').sign;

module.exports = {
    async create(request, response) {
        console.log(request.body)
        const { userLoginName, userName, userPassword, userEmail } = request.body;
        // The user credentials that you want to send back to ReadMe 
        const user = {
            name: userName || 'Some UserName',
            email: userEmail || 'Some Email',
            
            //This is what makes your interactive API docs! In this example we use OAS Security variables:
            apiKey: { user: userLoginName || 'SomeUserLoginName', pass: userPassword || 'Some user password', apiKey: 'Some API Sid' },
            // You can pass in any information here and use it in your documentation!
            // Full list of data that has special meaning in our API Reference: https://docs.readme.com/docs/passing-data-to-jwt
            version: 1, // Required, if omitted things can break unexpectedly
        };
        //create a signed token out of the user credentials
        const auth_token = sign(user, '4FLAI923BDkxog5UX90d');
        const readmeUrl = 'https://frentista.readme.io';
        
        
        //create the complete URL containing the signed token that you'll send back to ReadMe
        return response.json(`${readmeUrl}?auth_token=${auth_token}`);
            
    }
}