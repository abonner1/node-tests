module.exports.add = (a, b) => a + b

module.exports.square = (x) => x*x

module.exports.setName = (user, fullName) => {
  var names = fullName.split(" ")
  var firstName = names[0]
  var lastName = names[1]
  return {...user, firstName, lastName}
}
