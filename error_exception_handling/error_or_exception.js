

// compile time errors
// run time errors
// The difference between compile-time errors and run-time errors is when the error happens in the program lifecycle.


//  IDE = Integrated Development Environment 

// firstName let = "Mohamed"
// console.log(firstName)

// /home/simba/Repos/fst/javascript/error_exception_handling/error_or_exception.js:8
// firstName let = "Mohamed"
//           ^^^

// SyntaxError: Unexpected identifier 'let'
//     at wrapSafe (node:internal/modules/cjs/loader:1743:18)
//     at Module._compile (node:internal/modules/cjs/loader:1786:20)
//     at Object..js (node:internal/modules/cjs/loader:1943:10)
//     at Module.load (node:internal/modules/cjs/loader:1533:32)
//     at Module._load (node:internal/modules/cjs/loader:1335:12)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47

// Node.js v24.14.0

// let firstName 
// console.log(firstName.toUpperCase())

// /home/simba/Repos/fst/javascript/error_exception_handling/error_or_exception.js:32
// console.log(firstName.toUpperCase())
//                       ^

// TypeError: Cannot read properties of undefined (reading 'toUpperCase')
//     at Object.<anonymous> (/home/simba/Repos/fst/javascript/error_exception_handling/error_or_exception.js:32:23)
//     at Module._compile (node:internal/modules/cjs/loader:1812:14)
//     at Object..js (node:internal/modules/cjs/loader:1943:10)
//     at Module.load (node:internal/modules/cjs/loader:1533:32)
//     at Module._load (node:internal/modules/cjs/loader:1335:12)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47

// Node.js v24.14.0


// try {
// let firstName 
// console.log(firstName.toUpperCase())
// } catch (error) {
//     console.log("You have a error in your code please fix, I will not crash")
// }

// [Running] node "/home/simba/Repos/fst/javascript/error_exception_handling/error_or_exception.js"
// You have a error in your code please fix, I will not crash

// [Done] exited with code=0 in 0.036 seconds

// try {
// let firstName 
// console.log(firstName.toUpperCase())
// console.log("Hello")
// console.log("Hello Again")

// } catch (error) {
//     console.log("You have a error in your code please fix, I will not crash.")
// } finally {
//     console.log("This will run regardless of the error.")
// }

// [Running] node "/home/simba/Repos/fst/javascript/error_exception_handling/error_or_exception.js"
// You have a error in your code please fix, I will not crash.
// This will run regardless of the error.

// [Done] exited with code=0 in 0.186 seconds


// try {
// let firstName = "Mohamed"
// console.log(firstName.toUpperCase())
// console.log("Hello")
// console.log("Hello Again")

// } catch (error) {
//     console.log("You have a error in your code please fix, I will not crash.")
// } finally {
//     console.log("This will run regardless of the error.")
// }

// [Running] node "/home/simba/Repos/fst/javascript/error_exception_handling/error_or_exception.js"
// MOHAMED
// Hello
// Hello Again
// This will run regardless of the error.

// [Done] exited with code=0 in 0.035 seconds

// try {
// // let firstName 
// // console.log(firstName.toUpperCase())
// // console.log("Hello")
// // console.log("Hello Again")
// let dbError = new Error("Could not connect to the database.")
// throw dbError

// } catch (error) {
//     console.log(error.message)
// } finally {
//     console.log("This will run regardless of the error.")
// }

// [Running] node "/home/simba/Repos/fst/javascript/error_exception_handling/error_or_exception.js"
// Could not connect to the database.
// This will run regardless of the error.

// [Done] exited with code=0 in 0.186 seconds
