const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true);

const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    department : {
        type : Schema.Types.ObjectId,
        ref : 'Department',
        required : true
    },
    mobile : {
        type : String,
        required : true,
        minlength : 10,
        maxlength : 10
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

employeeSchema.virtual('Tickets', {
    ref : 'Ticket',
    localField : '_id',
    foreignField : 'employees'
})


const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee