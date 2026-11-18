const timerId = setTimeout(function () {
    console.log("Not shown");
}, 1000);

clearTimeout(timerId);
console.log("Cancelled");