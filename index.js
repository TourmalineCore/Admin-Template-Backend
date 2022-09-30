const express = require(`express`);
const cors = require(`cors`);
const bodyParser = require(`body-parser`);

const app = express();
const PORT = 5000;

const employees = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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

app.post(`/employee-table`, (req, res) => {
  let data = [...employees];
  
  if (req.query.orderingDirection === 'desc') {
    data.sort((a, b) => a[req.query.orderBy] < b[req.query.orderBy] ? 1 : -1);
  } else {
    data.sort((a, b) => a[req.query.orderBy] > b[req.query.orderBy] ? 1 : -1);
  }

  if (req.query.filteredByColumns) {
    data = filtration(data, req.query.filteredByColumns, req.query.filteredByValues);
  }

  res.send({
    draw: Number(req.query.draw),
    list: data, 
    totalCount: data.length,
  });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}. Available at http://localhost:5000`)
});


function filtration(data, options, values) {
  let result =  [...data];

  if (typeof options === 'string') {
    result = filter(data, options, values);

    return result;
  }

  options.forEach((option, index) => {
    result = filter(result, option, values[index]);
  });

  return result;
}

function filter(data, option, value) {
  let result = [];

  data.forEach((item) => {
    if (String(item[option]).toLowerCase().includes(value.toLowerCase()) == true) result.push(item);
  });

  return result;
}
