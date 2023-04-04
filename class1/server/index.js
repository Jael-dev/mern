const express = require('express')
const mongoose = require('mongoose')
const expenseSchema = require('./Models/expense')

const expenseModel = mongoose.model('Expense', expenseSchema)

const app = express()

const mongoDbAccess = "mongodb+srv://admin:admin@cluster0.0g8nv2k.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoDbAccess, {useNewUrlParser : true}).then(()=> console.log("connected to the database")).catch((e)=> console.log(e))

// This method is used to create a new expense and save it to the database

// const newExpense = {
//     name: "Transport",
//     amount: 100,
//     date: "April 1st",
//     invoice: "Transport Payment"
// }

// const addExpense = new expenseModel(newExpense)

// addExpense.save()


/// API'S: Let us create the different CRUD operations.



const port = 5000

app.listen(port, ()=>{
    console.log("Hello, you are listening to port" + port)
})

app.get('/',(res, req)=> console.log(res.send("Welcome to our web server")))

// a. GET /expenses to retrieve all data from the db

app.get('/expenses',(res, req)=> {
    expenseModel.find((err, expense)=>{
        if(err){console.log(err)}
        res.send(expense)
    })
})