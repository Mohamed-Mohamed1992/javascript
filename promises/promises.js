// Simulating Waiting (Next Week)

// let behavedWell = true;

// let phonePromise = new Promise(function(resolve, reject){

//     console.log("Waiting for next week... ⏳");

//     setTimeout(function(){

//         if(behavedWell){
//             resolve("Mom bought you a new phone 📱");
//         } else {
//             reject("You misbehaved. No phone! 😡");
//         }

//     }, 3000); // 3 seconds instead of 1 week

// });

// Now we need to handle the result of the promise.

// phonePromise
// .then(function(result){
//     console.log(result);
// })
// .catch(function(error){
//     console.log(error);
// });

// [Running] node "/home/simba/Repos/fst/javascript/promises/promises.js"
// Waiting for next week... ⏳
// Mom bought you a new phone 📱

// [Done] exited with code=0 in 3.045 seconds




function buyPhone(behavedWell) {

    return new Promise((resolve, reject) => {

        console.log("Mom is watching your behaviour this week... 👀");

        setTimeout(() => {

            if(behavedWell){
                resolve("You behaved well! Mom bought you a phone 📱");
            } else {
                reject("You misbehaved. No phone! 😡");
            }

        }, 3000);

    });

}

async function askMom(){

    try{

        let result = await buyPhone(true);

        console.log(result);

    } catch(error){

        console.log(error);

    }

}

askMom();