// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route to handle requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(8080, () => {
    console.log('Server is running on port 3000');
});
