const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)

const Schema = mongoose.Schema

const customerSchema = new Schema({
      name : {
          type : String,
          required : true
      },
      email : {
          type : String,
          required : true,
          unique: true
      },
      mobile : {
          type : String,
          required : true,
          maxlength : 10,
          minlength : 10
      },
      createdAt : {
          type : Date,
          default : Date.now()
      }
})

customerSchema.virtual('Tickets', {
    ref : 'Ticket',
    localField : '_id',
    foreignField : 'customer'
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer