const express = require('express');
const format = require('date-format');

const app = express()

const PORT = process.env.PORT || 4000;

app.get("/", (req,res) => {
    res.status(200).send("<h1>Hello World</h1>");
});


app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username : "yuktibhatt",
        followers : 200,
        follows: 400,
        date : format.asString("dd/MM - hh:mm:ss", new Date()),
    };

    res.status(200).json({ instaSocial });
});

app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        username : "Yukti Bhatt",
        followers : 500,
        follows: 600,
        date : format.asString("dd/MM - hh:mm:ss", new Date()),
        
    };

    res.status(200).json({ instaSocial });
});

app.get("/api/v1/linkedIn", (req, res) => {
    const instaSocial = {
        username : "yuktibhatt",
        followers : 400,
        follows: 700,
        date : format.asString("dd/MM - hh:mm:ss", new Date()),
    };

    res.status(200).json({ instaSocial });
});

app.get("/api/v1/:token", (req,res) => {
    console.log(req.params.token);
    res.status(200).json({param: req.params.token});
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
