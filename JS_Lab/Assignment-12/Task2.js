function formatMarks(marks, callback) {
    return callback(marks);
}

const text = formatMarks(76, (m) => "Marks: " + m + "/100");

console.log(text);