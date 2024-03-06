function fullviewimage(imgLink) {
    document.getElementById("fullimage").src = imgLink;
    var x = document.getElementById("fullviewimage").style.display = "block"
}
function closefullview() {
    var x = document.getElementById("fullviewimage").style.display = "none"
}