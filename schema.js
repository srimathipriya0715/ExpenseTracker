const mongoose = require('mongoose')

const ExpenseTrackerSchema = new mongoose.Schema({
    amount : {
        type : Number
    },
    category : {
         type : String
    },
    date : {
         type : String
    }
      
})
 const Expense = mongoose.model('expensedetails',
 ExpenseTrackerSchema)

 module.exports = {Expense }