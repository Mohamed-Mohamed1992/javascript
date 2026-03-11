import { multiply, divide, subtract } from "./mathOperations.js";

let num1 = 20;
let num2 = 5;

document.getElementById("multiply").textContent =
"Multiply: " + multiply(num1, num2);

document.getElementById("divide").textContent =
"Divide: " + divide(num1, num2);

document.getElementById("subtract").textContent =
"Subtract: " + subtract(num1, num2);