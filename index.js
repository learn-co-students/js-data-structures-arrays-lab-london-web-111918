// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const appendDriver = drivers.slice()
  appendDriver.push(name)
  return appendDriver
}

function prependDriver(name) {
  const prependDriver = drivers.slice()
  prependDriver.unshift(name)
  return prependDriver
}

function removeLastDriver() {
  return drivers.slice(0, -1)
}

function removeFirstDriver() {
  return drivers.slice(1, drivers.length)
}
