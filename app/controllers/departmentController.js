const Department = require('../models/department')
const Ticket = require('../models/ticket')
const Employee = require('../models/employee')



module.exports.list = (req, res) => {
    Department.find()
        .then(department => {
            res.json(department)
        })

        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {
    const body = req.body
    const department = new Department(body)
    department.save()
        .then(department => {
            res.json(department)
        })

        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id

    Department.findById(id)
        .then(department => {
            if(department){
                Ticket.find().populate('customer', ['_id', 'name']).populate('department', ['_id', 'name']).populate('employees', ['_id', 'name'])
                    .then(ticket => {
                        let tickets = ticket
                        tickets= ticket.filter(tic => tic.department._id == id)
                        console.log(tickets)


                        Employee.find().populate('department', ['_id', 'name'])
                            .then(employee => {
                                let employees = employee
                                employees = employees.filter(emp => emp.department._id == id)
                                res.json({department, employees, tickets})
                            }
                                
                            )

                        // res.json({department, tickets})

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

//     Department.findById(id)
//         .then(department => {
//             if(department){
//                 Ticket.find().populate('customer', ['_id', 'name']).populate('department', ['_id', 'name']).populate('employees', ['_id', 'name'])
//                     .then(ticket => {
//                         let tickets = ticket
//                         tickets= ticket.filter(tic => tic.department._id == id)
//                         console.log(tickets)




//                         res.json({department, tickets})

//                     })

                
//                     .catch(err => tic = [])

               
//             } else {
//                 res.json({})
//             }
//         })
//         .catch(err => res.json(err))

// }




// module.exports.show = (req, res) => {
//     const id = req.params.id
//     Department.findById(id)
//         .then(department => {
//             if(department){
//                 Ticket.find().populate('customer', ['_id', 'name']).populate('department', ['_id', 'name']).populate('employees', ['_id', 'name'])
//                 .then(ticket => {
//                     let tickets = ticket
//                     tickets= ticket.filter(tic => tic.customer._id == id)
//                     console.log(tickets)
//                     res.json({customer, tickets})

//                 })
//                 .catch(err => tic = [])
//             }
//         })

//         .catch(err => res.json(err))
// }

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body

    Department.findByIdAndUpdate(id, body, {runValidators : true, new : true})
        .then(department => {
            department ? res.json(department) : res.json({})
        })

        .catch(err => res.json(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id

    Department.findByIdAndDelete(id)
        .then(department => {
            department ? res.json(department) : res.json({})
        })

        .catch(err => res.json(err))
}