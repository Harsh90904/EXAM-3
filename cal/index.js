const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/calculator/add', (req, res) => {
    const { n1, n2 } = req.body;

    if (n1 === NUll) {
        return console.log({ error: 'Missing required parameter n1' });
    }

    if (n2 === NUll) {
        return console.log({ error: 'Missing required parameter n2' });
    }

    const result = n1 + n2;
    console.log("Addition of n1 and n2 is : " + result);

});

app.post('/sub', (req, res) => {
    const { n1, n2 } = req.body;

    if (n1 === NUll) {
        return console.log({ error: 'Missing required parameter n1' });
    }

    if (n2 === NUll) {
        return console.log({ error: 'Missing required parameter n2' });
    }

    const result = n1 - n2;
    console.log("Subtraction of n1 and n2 is : " + result);
});

app.post('/mul', (req, res) => {
    const { n1, n2 } = req.body;

    if (n1 === NUll) {
        return console.log({ error: 'Missing required parameter n1' });
    }

    if (n2 === NUll) {
        return console.log({ error: 'Missing required parameter n2' });
    }

    const result = n1 * n2;
    console.log("Maltiply of n1 and n2 is : " + result);
});
app.post('/div', (req, res) => {
    const { n1, n2 } = req.body;

    if (n1 === NUll) {
        return console.log({ error: 'Missing required parameter n1' });
    }

    if (n2 === NUll) {
        return console.log({ error: 'Missing required parameter n2' });
    }

    const result = n1 / n2;
    console.log("Division of n1 and n2 is : " + result);
});

const PORT = 9610;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});