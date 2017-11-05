const express = require('express');

var app = express()

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  })
})

app.get('/users', (req, res) => {
  res.send([
    {name: 'Andrew', age: 25},
    {name: 'Nancy', age: 57},
    {name: 'Scott', age: 65}
  ])
})

app.listen(3000)

module.exports.app = app
