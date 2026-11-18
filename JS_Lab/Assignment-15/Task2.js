function checkMarks(marks) {
    return new Promise(function (resolve, reject) {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(120).catch(function (error) {
    console.log(error.message);
});