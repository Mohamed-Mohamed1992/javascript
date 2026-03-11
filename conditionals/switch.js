let age = 13;

switch (true) {
    case age >= 18:
        console.log("You are an adult");
        break;

    case age <= 3:
        console.log("You are a todler");
        break;

    case age >= 13 && age <= 17:
        console.log("You are a teenager");
        break;

    default:
        console.log("You are NOT an adult");
}