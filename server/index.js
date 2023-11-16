const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//add Schema
const Member = require('./Models/Members');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb+srv://siriusblackazka:azkabann@cluster0.mou1mqu.mongodb.net/Members', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const newMember = new Member({ email, password });
        const savedMember = await newMember.save();
        res.json(savedMember);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('Harry Potter')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});