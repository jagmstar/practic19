document.addEventListener("DOMContentLoaded", function(event) { 
document.getElementById("submitBtn").addEventListener("click", function() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("output").innerHTML = "Привіт, " + name + "!";
});
});