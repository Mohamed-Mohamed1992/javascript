// === localStorage Example ===
// localStorage keeps data even after the browser is closed.

localStorage.setItem("username", "Mustafa");
localStorage.setItem("theme", "dark");

// Retrieve data
let name = localStorage.getItem("username");
console.log("Stored username:", name);

// Remove one item
localStorage.removeItem("theme");

// Clear all localStorage data
// localStorage.clear();