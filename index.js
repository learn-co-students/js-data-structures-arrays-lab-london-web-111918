// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

const destructivelyAppendDriver = (name) => {
    return drivers.push(name);
}

const destructivelyPrependDriver = (name) => {
    return drivers.unshift(name);
}

const destructivelyRemoveLastDriver = (name) => {
    return drivers.pop(name);
}

const destructivelyRemoveFirstDriver = (name) => {
    return drivers.shift(name);
}

const appendDriver = (name) => {
    return [...drivers, name];
}

const prependDriver = (name) => {
    return [name, ...drivers];
}

const removeLastDriver = (name) => {
    return drivers.slice(0, 2);
}

const removeFirstDriver = (name) => {
    return drivers.slice(1);
}

