// let firstNames = new Set(["Mohamed", "Mohamed", "Fatma", "Hanna"]);

// console.log(firstNames); 

// firstNames.add(5);
// firstNames.delete(2);

// console.log(firstNames.has(3))
// console.log({...firstNames})

// A set is like an array but cannot have duplicates.

//Create a Set with your data
const people = new Set(["Mustafa", "Mustafa", "Ismail", "Fatima"]);

console.log("Initial Set:", people);
// Duplicates are automatically removed

// 1. ADD new elements
people.add("Amina");
people.add("Ali");
console.log("After adding Amina and Ali:", people);

// 2. Delete an element
people.delete("Ismail");
console.log("After deleting Ismail:", people);

// 3. CHECK if a value exists
console.log("Has Fatima?", people.has("Fatima")); // true
console.log("Has ismail?", people.has("Ismail")); // false

// 4. SIZE of set
console.log("Set size:", people.size);

// 5. LOOP through the set
console.log("Loop through Set:");
for (let person of people) {
    console.log(person);
}

// 6. CONVERT Set to Array
const peopleArray = Array.from(people);
console.log("Converted to Array:", peopleArray)

// 7. CLEAR the entire Set
people.clear();
console.log("After clearing:", people);

//-----------EXTRA EXAMPLES-----------

// UNION, INTERSECTION, DIFFERENCE
const setA = new Set(["Mustafa", "Fatima", "Ali"]);
const setB = new Set(["Ali", "Ismail", "Maryam"]);

// Union (combine both sets)
const union = new Set([...setA, ...setB]);
console.log("Union:", union);

// Intersection (common elements)
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection:", intersection);

// Difference (elements in A but not in B)
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference:", difference);