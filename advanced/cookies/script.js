// Save cookie
function saveCookie() {
    const name = document.getElementById("username").value;

    // Cookie expires in 7 days
    const date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    document.cookie = "username=" + name + "; expires=" + date.toUTCString() + "; path=/";

    document.getElementById("output").innerText = "Cookie saved!";
}


// Load cookie
function loadCookie() {
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        const c = cookie.trim();

        if (c.startsWith("username=")) {
            const name = c.substring("username=".length);
            document.getElementById("output").innerText = "Stored cookie: " + name;
        }
    }
}


// Delete cookie
function deleteCookie() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.getElementById("output").innerText = "Cookie deleted!";
}


// Button events
document.getElementById("saveBtn").addEventListener("click", saveCookie);
document.getElementById("loadBtn").addEventListener("click", loadCookie);
document.getElementById("deleteBtn").addEventListener("click", deleteCookie);