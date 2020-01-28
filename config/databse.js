const mongoose = require('mongoose')

const setupDB = () => {
    mongoose.connect('mongodb://localhost:27017/oct-ticket-master', {useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('connected with database')
        })

        .catch(err => console.log(err))
}

module.exports = setupDB