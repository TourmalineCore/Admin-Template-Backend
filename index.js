const express = require(`express`);
const cors = require(`cors`);
const bodyParser = require(`body-parser`);
const crypto = require('crypto');

const app = express();
const PORT = 5000;

const dataUser = [
    {
        userName: 'example@mail.ru',
        password: '123',
    }
]

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post(`/login`, (req, res) => {
    const { username, password } = req.body;

    const foundUserId = dataUser.findIndex(({ userName }) => userName === username);
    const foundUser = dataUser[foundUserId];

    if (foundUser?.password === password) {
        const token = crypto.randomBytes(64).toString('hex');

        res.send({
            accessToken: {
                value: token,
            }
        });
    }

    res.status(404).send('User not valid');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}. Available at http://localhost:${PORT}`)
});