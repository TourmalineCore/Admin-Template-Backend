const express = require(`express`);
const cors = require(`cors`);
const bodyParser = require(`body-parser`);

const app = express();
const PORT = 5000;

const dataTable = [
  {
    actualSales: 5096606.9,
    employee: 'Employee 1',
    calculatedBonus: 2774.4,
    plannedSales: 5593097.36,
    previousSales: 4354489.83,
    targetAchivementPercent: 91.12,
    weight: 25,
    someType: 'firstType',
  },
  {
    actualSales: 21455221.56,
    employee: 'Employee 2',
    calculatedBonus: 7507.2,
    plannedSales: 23126748.43,
    previousSales: 19740627.1,
    targetAchivementPercent: 92.77,
    weight: 32,
    someType: 'secondType',
  },
  {
    actualSales: 7709519.93,
    employee: 'Employee 3',
    calculatedBonus: 36755.2,
    plannedSales: 7385674.05,
    previousSales: 6572816.8,
    targetAchivementPercent: 104.38,
    weight: 12,
    someType: 'firstType',
  },
  {
    actualSales: 12931847.81,
    employee: 'Employee 4',
    calculatedBonus: 36480,
    plannedSales: 12424437.43,
    previousSales: 11570609.21,
    targetAchivementPercent: 104.08,
    weight: 54,
    someType: 'secondType',
  },
  {
    actualSales: 14931847,
    employee: 'Employee 5',
    calculatedBonus: 66480,
    plannedSales: 1242437.43,
    previousSales: 1570609.21,
    targetAchivementPercent: 90,
    weight: 66,
    someType: 'firstType',
  },
];

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get(`/`, (req, res) => {
    res.send(`Hello World!`)
});

app.get(`/table`, () => {
    res.send(dataTable);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}. Available at http://localhost:5000`)
});