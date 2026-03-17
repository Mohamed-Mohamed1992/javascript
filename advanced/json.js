// JSON = JavaScript Object Notation
// JSON is used to send and receive data in web apps

const person = {
    name: "Mustafa",
    age: 16,
    country: "UK"
};

// Convert object to JSON (send to server)
const jsonData = JSON.stringify(person);
console.log("JSON Data:", jsonData);

// Convert JSON back to object (receive from server)
const parsedData = JSON.parse(jsonData);
console.log("Parsed Object:", parsedData)