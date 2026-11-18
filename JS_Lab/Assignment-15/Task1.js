function checkMarks(marks) {
    return new Promise(function (resolve, reject) {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(80).then(function (value) {
    console.log(value);
});