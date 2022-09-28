const express = require(`express`);
const cors = require(`cors`);
const bodyParser = require(`body-parser`);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get(`/`, (req, res) => {
    res.send(`Hello World!`)
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}. Available at http://localhost:5000`)
});