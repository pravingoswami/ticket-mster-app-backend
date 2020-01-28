const Customer = require('../models/customer')

const Ticket = require('../models/ticket')

module.exports.list = (req, res) => {
    Customer.find()
        .then(customers => {
            res.json(customers)
        })

        .catch(err => res.json(err))
} 

module.exports.create = (req, res) => {
    const body = req.body
    const customer = new Customer(body)
    customer.save()
        .then(customer => {
            res.json(customer)
        })

        .catch(err => res.json(err))
}


module.exports.show = (req, res) => {
    const id = req.params.id

    Customer.findById(id)
        .then(customer => {
            if(customer){
                Ticket.find().populate('customer', ['_id', 'name']).populate('department', ['_id', 'name']).populate('employees', ['_id', 'name'])
                    .then(ticket => {
                        let tickets = ticket
                        tickets = ticket.filter(tic => tic.customer._id == id)
                        console.log(tickets)
                        res.json({customer, tickets})

                    })
                    .catch(err => tic = [])

               
            } else {
                res.json({})
            }
        })
        .catch(err => res.json(err))
}


// module.exports.show = (req, res) => {
//     const id = req.params.id

//     Customer.findById(id).populate('ticket')
//         .then(customer => customer ? res.json(customer) : res.json({}))
//         .catch(err => res.json(err))

// }



// module.exports.show = (req, res) => {
//     const id = req.params.id
//     // let ticket = []

//     Ticket.find()
//         .then(ticket =>  {

//             let tic = ticket
//             // console.log(ticket)

//             Customer.findById(id)
//             .then(customer =>{
//                 tic = tic.filter(ticket.customer == id)
//                 console.log('tickets filter',tic)

//                 if(customer){
//                     console.log(customer)
//                     const data = {customer, tic}
//                     res.json(data)
//                 } else {
//                     res.json({})
//                 }
//             })
//             .catch(err => res.json(err))
//         })
        
//         .catch(err => res.json(err))

    // Customer.findById(id)
    // .then(customer =>{
    //     console.log(ticket)
    //     if(customer){
    //         console.log(customer)
    //         // const data = {customer}
    //         res.json(customer)
    //     } else {
    //         res.json({})
    //     }
    // })
    // .catch(err => res.json(err))

   

    // Customer.findById(id)
    //     .then(customer => customer ? res.json(customer) : res.json({}))
    //     .catch(err => res.json(err))

// }

// module.exports.show = (req, res) => {
//     const id = req.params.id

//     Customer.findById(id).populate('Tickets')
//         .then(customer => customer ? res.json(customer) : res.json({}))
//         .catch(err => res.json(err))

// }


// module.exports.show = (req, res) => {
//     const id = req.params.id

//     Customer.findById(id)
//         .then(customer => customer ? res.json(customer) : res.json({}))
//         .catch(err => res.json(err))

// }



module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Customer.findByIdAndUpdate(id, body, {runValidators : true, new :true})
        .then(customer => {
            customer ? res.json(customer) : res.json({})
        })

        .catch(err => res.json(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Customer.findByIdAndDelete(id)
        .then(customer => {
            customer ? res.json(customer) : res.json({})
        })

        .catch(err => res.json(err))
}