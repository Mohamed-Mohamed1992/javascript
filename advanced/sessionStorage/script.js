// Save name to sessionStorage
function saveName(){
    let name = document.getElementById("username").value;
    sessionStorage.setItem("username", name);
    document.getElementById("output").innerText = "Name saved!";
}

// Load name from sessionStorage
function loadName(){
    let savedName = sessionStorage.getItem("username");
    document.getElementById("output").innerText = "Stored name: " + savedName;
}

// Clear sessionStorage
function clearName(){
    sessionStorage.removeItem("username");
    document.getElementById("output").innerText = "Storage cleared!";
}

// Button events
document.getElementById("saveBtn").addEventListener("click", saveName);
document.getElementById("loadBtn").addEventListener("click", loadName);
document.getElementById("clearBtn").addEventListener("click", clearName);