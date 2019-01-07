// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const tempDriver = drivers.slice();
  tempDriver.push(name);
  return tempDriver;
}

function prependDriver(name) {
  const tempDriver = drivers.slice();
  tempDriver.unshift(name);
  return tempDriver;
}

function removeLastDriver() {
  const tempDriver = drivers.slice();
  tempDriver.pop();
  return tempDriver;
}

function removeFirstDriver() {
  const tempDriver = drivers.slice();
  tempDriver.shift();
  return tempDriver;
}
