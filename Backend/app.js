
let express = require('express');
let fileUpload = require('express-fileupload');
let jwt = require('jsonwebtoken');
let cors = require('cors');
const {verify} = jwt;
let cookieParser = require('cookie-parser');

let port = 2000;
let app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({}));


let indexController = require('./controllers/indexController');


function userAuthorization(req, res, next) {
    try {
        // Retrieve the token from either cookies or the Authorization header
        let token = req.cookies.jwtUserToken || req.headers.authorization?.split(' ')[1];

        if (!token) {
            // return res.redirect('http://localhost:5173/login');
            res.json({code: 1, message: 'Unauthorized Access'})
        }

        let secret = 'noor_mahal'; // Your JWT secret

        try {
            // Verify the token
            req['jwtUserInfo'] = verify(token, secret);
            next(); // Proceed to the next middleware or route handler
        } catch (error) {
            console.error("Token verification failed:", error);
            res.json({code: 1, message: error.message})
            // return res.redirect('http://localhost:5173/login');
        }

    } catch (e) {
        res.json({code: 1, message: e.message})
        console.error("Authorization error:", e);
    }
}




app.post("/form", indexController.form)
app.get("/formdata", indexController.formData);
app.post("/login", indexController.login);
app.post("/change_password", userAuthorization, indexController.change_password)
app.post("/contactform", userAuthorization, indexController.contact_form)
app.get("/view_contact", userAuthorization, indexController.view_contact)
app.post("/delete_contact", userAuthorization, indexController.delete_contact)
app.post("/edit_contact", userAuthorization, indexController.edit_contact)
app.post("/forgot_password", indexController.forgot_password)
app.post("/verifyOTP", indexController.verifyOTP)
app.post("/reset_password/:email", indexController.reset_password)


app.listen(port, (e) => {
    if (e)
        console.log(e)
    else
        console.log("server running at port  http://localhost:" + port);
})
