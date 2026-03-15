// let map = new Map();

// map.set("name", "Ali");
// map.set(1, "Number Key");
// map.set(true, "Boolean Key");

// console.log(map.get("name")); //Ali
// console.log(map.size); // 3
// for (let [key, value] of map) {
//     console.log(`${key} => ${value}`);
// }

let salesData = new Map([
  ["January", 1200],
  ["February", 950],
  ["March", 1340],
  ["April", 800],
  ["May", 1600],
  ["June", 1100],
  ["July", 1450],
  ["August", 1700],
  ["September", 900],
  ["October", 1250],
  ["November", 2000],
  ["December", 2500]
]);

//Example usage
console.log(salesData.get("January")); //1200
console.log(salesData.get("December")); // 2500

// Loop through all sales
for (let [month, sales] of salesData) {
    console.log(`${month}: $${sales}`);
}