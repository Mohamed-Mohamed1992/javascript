// let map = new Map();

// map.set("name", "Ali");
// map.set(1, "Number Key");
// map.set(true, "Boolean Key");

// console.log(map.get("name")); //Ali
// console.log(map.size); // 3
// for (let [key, value] of map) {
//     console.log(`${key} => ${value}`);
// }

// let salesData = new Map([
//   ["January", 1200],
//   ["February", 950],
//   ["March", 1340],
//   ["April", 800],
//   ["May", 1600],
//   ["June", 1100],
//   ["July", 1450],
//   ["August", 1700],
//   ["September", 900],
//   ["October", 1250],
//   ["November", 2000],
//   ["December", 2500]
// ]);

// //Example usage
// console.log(salesData.get("January")); //1200
// console.log(salesData.get("December")); // 2500

// // Loop through all sales
// for (let [month, sales] of salesData) {
//     console.log(`${month}: $${sales}`);
// }

// Create a Map
const people = new Map([
  ["Fatima", 25],
  ["Mustafa", 30],
  ["Ismail", 28]
]);

// 1. ADD new elements
people.set("Amina", 22);
people.set("Ali", 27);
console.log("After adding Amina and Ali:", people);

// 2. DELETE an element
people.delete("Ismail");
console.log("After deleting Ismail:", people);

// 3. CHECK if a key exists
console.log("Has Fatima?", people.has("Fatima")); // true
console.log("Has Ismail?", people.has("Ismail")); // false

// 4. GET value from a key
console.log("Fatima's age:", people.get("Fatima"));

// 5. SIZE of Map
console.log("Map size:", people.size);

// 6. LOOP through the Map
console.log("Loop through Map:");
for (let [name, age] of people) {
  console.log(name, age);
}

// 7. CONVERT Map to Array
const peopleArray = Array.from(people);
console.log("Converted to Array:", peopleArray);

// 8. GET all keys
console.log("All names:", [...people.keys()]);

// 9. GET all values
console.log("All ages:", [...people.values()]);

// 10. CLEAR the entire Map
people.clear();
console.log("After clearing:", people);