const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true);

const Schema = mongoose.Schema



const ticketSchema = new Schema({
    code : {
        type : String,
        required : true,
        unique : true
    },
    priority : {
        type : String,
        enum : ["High", "Medium", "Low"],
        required : true
    },
    customer : {
        type : Schema.Types.ObjectId,
        ref : 'Customer',
        required : true
    },
    department : {
        type : Schema.Types.ObjectId,
        ref : 'Department',
        required : true
    },
    employees : {
        type : [{"_id" : Schema.Types.ObjectId}],
        // type : Schema.Types.ObjectId,
        ref : 'Employee',
        required : true
    },
    message : {
        type : String,
        minlength : 5,
        required : true
    },
    isResolved : {
        type : Boolean,
        default : false
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})



const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket