function sayMyName(){
    console.log("Hello " + "Mohamed")
}

let timer = setInterval(sayMyName,1000)

setTimeout(function () {
    clearInterval(timer)
}, 5000)
