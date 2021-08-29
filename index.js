// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

function appendCat(name) {
    const newCat = [...cats, name];
    return newCat 
}

function prependCat(name) {
    const addFirstCat = [name, ...cats];
    return addFirstCat;
}

function removeLastCat() {
    const removeCat = cats.slice(0, cats.length - 1);
    return removeCat;
}

function removeFirstCat() {
    const removeOneCat = cats.slice(1)
    return removeOneCat;
}