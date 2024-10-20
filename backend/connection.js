const mongoose = require('mongoose');
require('dotenv').config();

// Log the connection string for debugging purposes
console.log('MongoDB Connection String:', process.env.con);

mongoose.connect(process.env.con, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB is connected');
}).catch((err) => {
    console.error('DB not connected:', err.message);
});