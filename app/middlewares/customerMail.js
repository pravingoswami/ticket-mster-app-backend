const Customer = require('../models/customer')
const nodemailer = require('nodemailer')

const ticketGeneratedMail = (req, res, next) => {
    console.log('ticket generated')
    console.log(req.body.customer)
    Customer.findById(req.body.customer)
        .then(customer => {

        let transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'ticketmasterappinfo@gmail.com',
        pass : 'Ticket4737'
        }
    })

    let mailOptions  = {
        from : 'ticketmasterappinfo@gmail.com',
        to : customer.email,
        subject : 'Ticket Generated',
        text : 'Dear Customer your ticket is generated'
    }

        transporter.sendMail(mailOptions, (err, res) => {
        if(err){
            console.log('Error', err)
        } else {
            console.log('Email sent')
            next()

        }
    })

            
        })

    // const customer = req.body

    // let transporter = nodemailer.createTransport({
    //     service : 'gmail',
    //     auth : {
    //         user : 'ticketmasterappinfo@gmail.com',
    //     pass : 'Ticket4737'
    //     }
    // })

    // let mailOptions  = {
    //     from : 'ticketmasterappinfo@gmail.com',
    //     to : customer.email,
    //     subject : 'Ticket Generated',
    //     text : 'Dear Customer your ticket is generated'
    // }


    // next()
}

const ticketResolveMail = (req, res, next) => {
    console.log('Ticket resolve')
    if(req.body.isResolved){
        Customer.findById(req.body.customer)
        .then(customer => {

        let transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'ticketmasterappinfo@gmail.com',
        pass : 'Ticket4737'
        }
    })

    let mailOptions  = {
        from : 'ticketmasterappinfo@gmail.com',
        to : customer.email,
        subject : 'Ticket Resolved',
        text : 'Dear Customer your ticket is Resolved'
    }

        transporter.sendMail(mailOptions, (err, res) => {
        if(err){
            console.log('Error', err)
        } else {
            console.log('Email sent')
            next()

        }
    })

            
        })

    }
    next()
}

module.exports = {
    ticketGeneratedMail,
    ticketResolveMail
}