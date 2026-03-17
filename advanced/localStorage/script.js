// Save name to localStorage
function saveName(){
    let name = document.getElementById("username").value;
    localStorage.setItem("username", name);
    document.getElementById("output").innerText = "Name saved!";
}

// Load name from localStorage
function loadName(){
    let savedName = localStorage.getItem("username");
    document.getElementById("output").innerText = "Stored name: " + savedName;
}

// Clear localStorage
function clearName(){
    localStorage.removeItem("username");
    document.getElementById("output").innerText = "Storage cleared!";
}

// Button events
document.getElementById("saveBtn").addEventListener("click", saveName);
document.getElementById("loadBtn").addEventListener("click", loadName);
document.getElementById("clearBtn").addEventListener("click", clearName);