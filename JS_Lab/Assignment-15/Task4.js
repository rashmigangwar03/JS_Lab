function getUsers() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve([
                { id: 1, name: "Asha" },
                { id: 2, name: "Rohan" },
                { id: 3, name: "Meera" }
            ]);
        }, 100);
    });
}

async function showUsers() {
    const users = await getUsers();

    users.forEach(function (user) {
        console.log(user.name);
    });
}

showUsers();