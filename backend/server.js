require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const booksRouter = require('./routes/bookstore.routes');
const authRouter = require('./routes/auth.routes');
const cors = require('cors');

app.use(express.json());
app.use(cors())
app.use('/books', booksRouter);
app.use('/auth', authRouter);

mongoose.connect(process.env.MONGODB_URL).then(() => { console.log(`Connection to MongoDB Successfully created`) }).catch((err) => { console.log(err); })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})