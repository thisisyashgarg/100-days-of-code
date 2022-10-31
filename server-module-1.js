import express from 'express'
const app = express();

app.listen(5502, ()=>{
    console.log(`server running on 5502`);
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

