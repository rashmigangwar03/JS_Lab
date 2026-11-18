const marks = [72, 85, 45, 90];

const passed = marks.filter(function (mark) {
    return mark >= 60;
});

console.log(passed);