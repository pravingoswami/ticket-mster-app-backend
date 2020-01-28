const Ticket = require('../models/ticket')

module.exports.list = (req, res) => {
    Ticket.find().populate('customer', ['_id', 'name']).populate('department', ['_id', 'name']).populate('employees', ['_id', 'name'])
        .then(ticket => {
            res.json(ticket)
        })

        .catch(err => res.json(err))
} 


module.exports.create = (req, res) => {
    
    const body = req.body 
    const ticket = new Ticket(body)

    ticket.save()
        .then(ticket => {
            res.json(ticket)
        })

        .catch(err => res.json(err))
} 


module.exports.show = (req, res) => {

    const id = req.params.id

    Ticket.findById(id).populate('customer', ['_id', 'name']).populate('department', ['_id', 'name']).populate('employees', ['_id', 'name'])
        .then(ticket => {
            ticket ? res.json(ticket) : res.json({})
        })
        
        .catch(err =>res.json(err))
} 


module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body

    Ticket.findByIdAndUpdate(id, body, {new : true, runValidators : true})
        .then(ticket => {
            ticket ? res.json(ticket) : res.json({})
        })

        .catch(err =>res.json(err))
} 


module.exports.destroy = (req, res) => {
    const id = req.params.id
    
    Ticket.findByIdAndDelete(id)
        .then(ticket => {
            ticket ? res.json(ticket) : res.json({})
        })

        .catch(err => res.json(err))
} 