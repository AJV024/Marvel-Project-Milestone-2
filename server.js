const express = require('express');
const app = express();
const path = require('path');

// Set up static files directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Route for serving index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for handling form submission
app.post('/create-profile', (req, res) => {
    const { email, password } = req.body;
    // Here you can handle the form submission, like saving the data to a database
    res.send('Profile created successfully! <a href="/">Go back to Home</a>');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
