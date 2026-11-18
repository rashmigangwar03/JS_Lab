function applyTwice(fn, value) {
    const first = fn(value);
    return fn(first);
}

function addTen(number) {
    return number + 10;
}

console.log(applyTwice(addTen, 5));