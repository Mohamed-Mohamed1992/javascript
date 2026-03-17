// function listNames() {
//     console.log("Mohamed")
//     console.log("Rahma")
//     console.log("Harun")
//     console.log("Musa")
//     console.log("Sakina")
// }
// listNames()

function* listNames() {
    yield "Mohamed";
    yield "Rahma";
    yield "Harun";
    yield "Musa";
    yield "Sakina";
}

// const names = listNames();

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to use generator with delay
async function displayNames() {
    const names = listNames();

    console.log(names.next().value);
    await sleep(3000);

    console.log(names.next().value);
    await sleep(3000);

    console.log(names.next().value);
    await sleep(3000);

    console.log(names.next().value);
    await sleep(3000);

    console.log(names.next().value);
}

displayNames();