// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name)
}

function appendDriver(name){
  const allDrivers = [...drivers,name];
  return allDrivers;
}

function prependDriver(name){
  const allDrivers = [name,...drivers];
  return allDrivers;
}

function removeLastDriver(){
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver(){
  return drivers.slice(1);
}
