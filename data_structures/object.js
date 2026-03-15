let person = {
    name: "Hinda",
    age: 25,
    city: "Mogadishu",
};

console.log(person.name); // Hinda

// Add property
person.job = "Developer";

// Loop through keys
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
