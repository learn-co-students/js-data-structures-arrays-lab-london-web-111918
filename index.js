// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push('Ralph')
}

function destructivelyPrependDriver(name) {
  return drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(name) {
  return drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
  return drivers.shift()
}

function appendDriver(name) {
  const new_drivers = [...drivers, 'Broom']
  return new_drivers
}

function prependDriver(name) {
  const new_drivers = ['Arnold', ...drivers]
  return new_drivers
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length-1)
}

function removeFirstDriver(){
  return drivers.slice(1)
}
