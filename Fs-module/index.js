const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());


app.get("/read", (req, res) => {
    const { filename } = req.query;
    fs.readFile(filename, 'utf8', ( data) => {
        res.json({ data });
    });
})
app.post('/create', (req, res) => {
    const { filename, data } = req.body;

    fs.writeFile(filename, data, () => {
        
        console.log({ message: 'File Created successfully' });
    });
});
app.put('/update', (req, res) => {
    const { filename, data } = req.body;

    fs.appendFile(filename, data, () => {
        
        console.log({ message: 'File Updatred successfully' });
    });
});

app.delete('/delete', (req, res) => {
    const { filename } = req.body;

    fs.unlink(filename, () => {
        
        console.log({ message: 'File Deleted successfully' });

    });
});

const PORT = 8530;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
