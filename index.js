import express from 'express'
const app = express();
const port = 5502;


app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`);
});

app.get('/form', (req, res) => {
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
    res.send('Received');
});

app.post('/form', (req, res) => {
    console.log(req.query);
    res.send('Received');
});

