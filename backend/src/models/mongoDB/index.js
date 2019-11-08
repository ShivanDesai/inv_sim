`use strict`

import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE_URL, { 
	useNewUrlParser: true , 
	useUnifiedTopology: true,
	poolSize: 5})
mongoose.Promise = global.Promise
let db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = db