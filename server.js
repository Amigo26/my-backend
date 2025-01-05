const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Sample Signup Route
app.post('/api/signup', (req, res) => {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }
    res.status(201).json({ message: 'User created successfully!' });
});

// Sample Login Route
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'test@example.com' && password === 'password123') {
        return res.status(200).json({ message: 'Login successful!' });
    }
    res.status(401).json({ message: 'Invalid credentials!' });
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});