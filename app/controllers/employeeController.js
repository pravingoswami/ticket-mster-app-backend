const Employee = require('../models/employee')
const Ticket = require('../models/ticket')


module.exports.list = (req, res) => {
    Employee.find().populate('department', ['_id', 'name'])
        .then(employee => {
            res.json(employee)
        })

        .catch(err => res.json(err))
} 


module.exports.create = (req, res) => {
    
    const body = req.body 
    const employee = new Employee(body)

    employee.save()
        .then(employee => {
            res.json(employee)
        })

        .catch(err => res.json(err))
} 


// module.exports.show = (req, res) => {
//     const id = req.params.id

//     Customer.findById(id)
//         .then(customer => {
//             if(customer){
//                 let tic = []
//                 Ticket.find().populate('customer', ['_id', 'name']).populate('department', ['_id', 'name']).populate('employees', ['_id', 'name'])
//                     .then(ticket => {
//                         let tickets = ticket
//                         tickets= ticket.filter(tic => tic.customer._id == id)
//                         console.log(tickets)
//                         res.json({customer, tickets})

//                     })
//                     .catch(err => tic = [])

//                     console.log(tic)
               
//             } else {
//                 res.json({})
//             }
//         })
//         .catch(err => res.json(err))

// }

module.exports.show = (req, res) => {

    const id = req.params.id

    Employee.findById(id).populate('department', ['_id', 'name'])

        .then(employee => {
            if(employee){
                // res.json(employee)

                Ticket.find().populate('customer', ['_id', 'name']).populate('department', ['_id', 'name']).populate('employees', ['_id', 'name'])
                .then(ticket => {
                    let tickets = ticket
                    // tickets= ticket.filter(tic => tic.employees.forEach(emp => emp._id == id) )
                    tickets = tickets.filter(tic => tic.employees.find(emp => emp._id == id))
                    console.log(tickets)
                    res.json({employee, tickets})

                })
                .catch(err => tic = [])
            }else {
                res.json({})
            }
        })
        
        .catch(err =>res.json(err))
} 

// module.exports.show = (req, res) => {

//     const id = req.params.id

//     Employee.findById(id).populate('department', ['_id', 'name'])
//         .then(employee => {
//             employee ? res.json(employee) : res.json({})
//         })
        
//         .catch(err =>res.json(err))
// } 


module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body

    Employee.findByIdAndUpdate(id, body, {new : true, runValidators : true})
        .then(employee => {
            employee ? res.json(employee) : res.json({})
        })

        .catch(err =>res.json(err))
} 


module.exports.destroy = (req, res) => {
    const id = req.params.id
    
    Employee.findByIdAndDelete(id)
        .then(employee => {
            employee ? res.json(employee) : res.json({})
        })

        .catch(err => res.json(err))
} 