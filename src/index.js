const express = require("express");

const app = express();

let courses = [
  "Curso 1",
  "Curso 2",
  "Curso 3"
];

app.get('/', (req, res) => {
  return res.status(200).json({
    message: "Olá mundo, testando as modificações com o nodemon"
  });
});

app.get('/courses', (req, res) => {

  const { name } = req.query;

  if (name) {
    let el = courses.find(element => element === name);

    return res.status(200).json(el);
  }

  return res.status(200).json({
    courses,
    name: name
  });
});

app.post('/courses', (req, res) => {
  return res.status(200).json({
    courses: [
      "Curso 1",
      "Curso 2",
      "Curso 3",
      "Curso 4"
    ]
  });
});


app.put('/courses/:id', (req, res) => {

  const { id } = req.params;

  return res.status(200).json({
    courses: [
      "Curso 6",
      "Curso 2",
      "Curso 3",
      "Curso 4"
    ],
    id: id
  });
});


app.patch('/courses/:id', (req, res) => {
  return res.status(200).json({
    courses: [
      "Curso 6",
      "Curso 7",
      "Curso 3",
      "Curso 4"
    ]
  });
});

app.delete('/courses/:id', (req, res) => {
  return res.status(200).json({
    courses: [
      "Curso 6",
      "Curso 7",
      "Curso 4"
    ]
  });
})

app.listen(3333);