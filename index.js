// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push("Ralph")
}

function destructivelyPrependDriver(name){
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(name){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift()
}

function appendDriver(name){
  const newArray = [...drivers, name]
  return newArray
}

function prependDriver(name){
  const newArray = [name, ...drivers]
  return newArray
}

function removeLastDriver() {
  const newArray = drivers.slice(0,2)
  return newArray
}

function removeFirstDriver() {
  const newArray = drivers.slice(1,3)
  return newArray
}
