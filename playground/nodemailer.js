const nodemailer = require('nodemailer')
const xoauth2 = require('xoauth2')


let transporter  = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user : 'ticketmasterappinfo@gmail.com',
        pass : 'Ticket4737'
    }
    // auth : {
    //     // xoauth2 : xoauth2.createXOAuth2Generator({
    //         user : 'ingenious4737@gmail.com',
    //         pass : 'Pinesh4737@'

    //         // // we will get this id from the gmail console api -> new project -> library -> gmail api -> enable gmail api -> credentials -> 0auth constent screen -> give the app name -> create credentials -> 0auth client -> go to the OAuth 2.0 Playground website is -- https://developers.google.com/oauthplayground/ -> copy that link and paste in the 0auth client contest -> copy the client id and client secret
    //         // clientId : '373609920366-ps4cbiub5e8urn6unf7evk6tq0i18v09.apps.googleusercontent.com',
    //         // clientSecret : 'R6JTmuBzGtMWSevBqj3azB0S',

    //         // // go to the OAuth 2.0 Playground website is -- https://developers.google.com/oauthplayground/ -> setting -> enable Use your own OAuth credentials -> enable -> copy client id and paste in 0auth client & oauth secret
    //         // refreshToken : ''
    //     })
    // }
})

let mailOptions  = {
    from : 'ticketmasterappinfo@gmail.com',
    to : 'goswami4737@gmail.com',
    subject : 'hi how r u',
    text : 'this is my email'
}

transporter.sendMail(mailOptions, (err, res) => {
    if(err){
        console.log('Error', err)
    } else {
        console.log('Email sent')
    }
})