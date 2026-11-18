const prices = [120, 45, 300];

const total = prices.reduce(function (sum, price) {
    return sum + price;
}, 0);

console.log(total);