const express = require('express')
const mongoose = require('mongoose')

const app = express()

const mongoDbAccess = "mongodb+srv://admin:admin@cluster0.0g8nv2k.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoDbAccess, {useNewUrlParser : true}).then(()=> console.log("connected to the database")).catch((e)=> console.log(e))