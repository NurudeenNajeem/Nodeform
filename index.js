const path = require('path');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'index.html'));
});

app.post('/register', (req, res) => {
    const { name, email,textarea } = req.body;

    console.log(req.body);
    // res.send('Registration successful');
    res.sendFile(path.join(__dirname, 'public' ,'success.html'));

    
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
