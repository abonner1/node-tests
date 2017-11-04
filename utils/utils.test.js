const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11)

  expect(res).toBe(44).toBeA('number')
})

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number')
    done()
  })
})

it('should square a number', () => {
  var result = utils.square(7)

  expect(result).toBe(49).toBeA('number')
})

it('should async square a number', (done) => {
  utils.asyncSquare(7, (square) => {
    expect(square).toBe(49).toBeA('number')
    done()
  })
})

it('should verify first and last name are set', () => {
  var user = {location: "Niles", age: 25}
  var result = utils.setName(user, "Andrew Bonner")

  expect(user).toNotEqual(result)
  expect(result).toBeA('object')
  expect(result).toInclude({
    firstName: "Andrew",
    lastName: "Bonner"
  })
})

// it('should expect some values', () => {
  // expect(12).toNotBe(12)
  // expect({name: 'Andrew'}).toEqual({name: 'Andrew'})
  // expect([2, 3, 4]).toExclude(1)
  // expect({
  //   name: 'Andrew',
  //   age: 25,
  //   location: 'South Bend'
  // }).toInclude({
  //   age: 25
  // })
// })
