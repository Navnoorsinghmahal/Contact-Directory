let conn = require('../connection/connection');
const {errorFunc} = require("express-fileupload/lib/utilities");
let indexController = {}
let jwt = require('jsonwebtoken');
const {sign} = require('jsonwebtoken')
let {DB_SECRET ,DB_USER_TOKEN } = process.env;
const sea = require("node:sea");
const req = require("express/lib/request");
const nodemailer = require('nodemailer');




indexController.form = (req, res) => {
    data = req.body;
    console.log(data);
    let{firstname, lastname, email, mobile, password, gender, streetName, city, pinCode} = data;

    selectSql = `select email from form_data where email = '${email}'`

    conn.query(selectSql, (e, records) => {
        if(e){
            res.json({code: 2, error: true, message: e.message})
        }
        else{
            if (records.length >0) {
                res.json({code: 2, error: true, message: 'Email already exists'})
            } else {
                insertSql = `insert into form_data(firstname, lastname, email, mobile, gender, streetName, city, pinCode, password) values('${firstname}','${lastname}',
        '${email}','${mobile}','${gender}', '${streetName}', '${city}', '${pinCode}', '${password}')`

                console.log(insertSql);

                conn.query(insertSql, (e) => {
                    if (e){
                        res.json({code: 2, error: true, message: e.message})
                    }
                    else{
                        res.json({code: 3, error: false, message: 'Form submitted successfully'})
                    }
                })
            }
        }
    })


}

indexController.formData = (req, res) => {

    selectSql = `select * from node_react.form_data`


    conn.query(selectSql, (e, rows) => {
        if (e){
            res.json({code: 2, error: true, message: e.message})
        }
        else{
            res.json({code: 3, error: false, message: 'Data Fetched', records: rows})
        }

    })
}

indexController.login=(req, res) => {

    data = req.body;
    let{email, password} = data;

    selectSql = `select * from node_react.form_data where email='${email}' and password='${password}'`

    conn.query(selectSql, (e, records) => {
        // console.log(records);

        if (e){
            res.json({code: 2, error: true, message: e.message})
        }
        else{
            if(records.length > 0){
                // let data = row[0];
                sign({
                    "user_id":records[0].id,
                    "email":records[0].email,
                    "firstName":records[0].firstName,
                    "lastName":records[0].lastName,
                    "gender":records[0].gender,

                },'noor_mahal',{expiresIn: '1d'},(e,token)=>{
                    if(e)
                        res.json({code: 2, error: true, message: e.message})
                    else
                    {
                        console.log(token)
                        res.cookie("jwtUserToken", token, "1d");

                        res.json({code: 3, error: false, message: "Logged in successfully",data : token})
                    }
                })
            }
            else{
                res.json({code: 2, error: true, message: 'Login Credentials does not match'})
            }
        }
    })


}

indexController.change_password=(req, res) => {
    let id = req['jwtUserInfo']['user_id'];
    let{old_password, new_password, confirm_password} = req.body;
    console.log(id);
    console.log(req.body);

    selectSql = `select password from node_react.form_data where id = ${id}`

    conn.query(selectSql, (e, record) => {
        // console.log(record[0].password)
        // console.log(old_password)
        if (e) {
            res.json({code: 2, error: true, message: e.message})
        }

        else {
            if (record[0].password === old_password)

                if (new_password !== confirm_password)
                    res.json({error: true, message: "Confirm password must be same as new password!"})

                else {
                    let updateSql = `UPDATE form_data SET password = '${new_password}' WHERE id = '${id}'`;

                    conn.query(updateSql, (e) => {
                        if (e) {
                            res.json({code: 2, error: true, message: e.message})
                        } else {
                            res.json({code: 3, error: false, message: "Passwords changed Successfully"})
                        }
                    })

                }
            else {
                res.json({code: 2, error: true, message: "Old Password does not match!"})
            }

        }
    })

}

indexController.contact_form=(req, res) => {

    let id = req['jwtUserInfo']['user_id'];
    console.log(id);

    let data = req.body;
    console.log(data);

    let {firstname, lastname, email, mobile} = data;

    selectSql = `insert into contact(firstname, lastname, email, mobile, user_id) values('${firstname}','${lastname}','${email}','${mobile}', '${id}')`

    conn.query(selectSql, (e) => {
        if (e){
            res.json({code: 2, error: true, message: e.message})
        }
        else{
            res.json({code: 3, error: false, message: "Contact added successfully"})
        }
    })



}

indexController.view_contact=(req, res) => {

    let id = req['jwtUserInfo']['user_id'];

    console.log(id);

    selectSql = `select * from contact where user_id = ${id}`

    conn.query(selectSql, (e, rows) => {
        console.log(rows);
        if (e) {
            res.json({code: 2, error: true, message: e.message})
        }
        else{
            res.json({code: 3, error: false, message: "Records accessed successfully",records : rows})
        }
    })
}

indexController.delete_contact=(req, res) => {
    let user_id = req['jwtUserInfo']['user_id'];

    console.log(req.body)

    let id = (req.body.id)

    let deleteSql = `delete from contact where id='${id}'`

    conn.query(deleteSql, (e) => {
        if (e) {
            res.json({code: 2, error: true, message: e.message})
        }
        else{
            res.json({code: 3, error: false, message: "Deleted successfully"})
        }
    })
}

indexController.edit_contact=(req, res) => {
    let user_id = req['jwtUserInfo']['user_id'];
    console.log(req.body);
    let data = req.body;
    let{id, firstname, lastname, email, mobile} = data;

    updateSql = `update contact set firstname='${firstname}',lastname='${lastname}',email='${email}',mobile='${mobile}' where id='${id}'`;

    conn.query(updateSql, (e) => {
        if (e) {
            res.json({code: 2, error: true, message: e.message})
        }
        else{
            res.json({code: 3, error: false, message: "Contact Updated successfully"})
        }
    })
}

indexController.forgot_password = (req, res) => {

    console.log(req.body)
    let{email} = req.body;
    console.log(email);
    let selectSql = `select email from form_data where email='${email}'`;

    conn.query(selectSql, (e, record) => {


        if (e) {
            res.json({code: 2, error: true, message: "Wrong email entered"})
        }
        else{
            if (record[0] === undefined)
                res.json({code: 2, error: true, message: "Wrong email entered"})
            else{
                // res.json({error: false, message: "Right email entered"})
                const randomCode =  Math.floor(100000 + Math.random() * 900000);

                Updatesql = `update form_data set randomCode='${randomCode}' where email='${email}'`
                conn.query(Updatesql, (e) => {
                    if (e) {
                        res.json({code: 2, error: true, message: e.message})
                    }
                    else{
                        const transporter = nodemailer.createTransport({
                            host: "smtp.gmail.com",
                            port: 587,
                            secure: false, // Use `true` for port 465, `false` for all other ports
                            auth: {
                                user: "noormahal130505@gmail.com",
                                pass: "flgj qmhn ajdm lqgh",
                            },
                        });
                        const mailOption = {
                            from: "noormahal130505@gmail.com",
                            to : "noormahal130505@gmail.com",
                            subject: "Email",
                            text:'Your OTP to change user password is ' + randomCode
                        };
                        transporter.sendMail(mailOption, (err, info) => {
                            if (err) {
                                res.json({code: 2, error: true, message: err.message})
                            }
                            else{
                                res.json({code: 3, error: false, message: "OTP sent"})
                            }
                        })
                    }
                })

            }
        }
    })


}

indexController.verifyOTP = (req, res) => {

    console.log(req.body)
    let{randomCode} = req.body;

    selectSql = `select randomCode from form_data where randomCode = '${randomCode}'`

    conn.query(selectSql, (e, records) => {
        if (e) {
            res.json({code: 2, error: true, message: e.message})
        }
        else{
            if (records.length > 0) {
                res.json({code: 3, error: false, message: "Correct OTP entered"})
                updateSql = `UPDATE form_data SET randomCode = NULL WHERE randomCode = '${randomCode}'`;
                conn.query(updateSql, (e) => {
                    if (e) {
                        res.json({code: 2, error: true, message: e.message})
                    }
                })
            }
            else{
                res.json({code: 2, error: true, message: "Wrong OTP entered"})
            }
        }
    })
}

indexController.reset_password = (req, res) => {
    console.log(req.body)
    let {email} = req.params
    console.log(email);
    let{newPassword} = req.body;

    let insertSql = `update form_data set password='${newPassword}' where email='${email}'`

    conn.query(insertSql, (e) => {
        if (e) {
            res.json({code: 2, error: true, message: e.message})
        }
        else{
            res.json({code: 3, error: false, message: "Password Changed successfully"})
        }
    })
}

module.exports = indexController;