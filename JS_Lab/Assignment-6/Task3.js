const text = "{name: Rohan}";

try {
    const data = JSON.parse(text);
    console.log(data);
} catch (error) {
    console.log("Invalid JSON");
}
