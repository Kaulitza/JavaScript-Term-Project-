//variables
var hairstyles = ["black", "#664F3C", "6F4E37", "#FBF6D9", "#BCC6CC", "#C11B17"];
var outfits = ["outfit1", "outfit2", "outfit3", "outfit4"];
var accessoires = ["accessoires1", "accessoires2", "accessoires3", "accessoires4"];
var eye = ["#634e34", "#2e536f", "#3d671d", "#1c7847", "#497665", "#528C9E"]
var skin = ["#fff9e6", "#ffecb3", "#ffb366", "#4d2600"];
var lips = ["#A60061", "#B95594", "#D162A8", "#E5ADD1", "#C64D53", "#8C1801"];
var j = 0;
var i = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
// function to change the hair when clicked
function changehair() {
    if (i == (hairstyles.length) - 1) {
        i = 0;
    }
    else {
        i++;
    }
    document.getElementById("hair1").style.backgroundColor = hairstyles[i];
    document.getElementById("hair2").style.backgroundColor = hairstyles[i];
}
// function to change the outfit when clicked
function changeoutfit() {
    document.getElementById(outfits[j]).style.visibility = "hidden";
    if (j == (outfits.length) - 1) {
        j = 0;
    }
    else {
        j++;
    }
    document.getElementById(outfits[j]).style.visibility = "visible";
}
// function to change the eye color when clicked
function changeeye() {
    if (l == (eye.length) - 1) {
        l = 0;
    }
    else {
        l++;
    }
    document.getElementById("eye1").style.backgroundColor = eye[l];
    document.getElementById("eye2").style.backgroundColor = eye[l];
}
// function to change the skin color when clicked
function changeskin() {
    if (m == (skin.length) - 1) {
        m = 0;
    }
    else {
        m++;
    }
    document.getElementById("face").style.backgroundColor = skin[m];
    document.getElementById("lefthand").style.backgroundColor = skin[m];
    document.getElementById("righthand").style.backgroundColor = skin[m];
    document.getElementById("neck").style.backgroundColor = skin[m];
    document.getElementById("neck1").style.backgroundColor = skin[m];
    document.getElementById("body").style.backgroundColor = skin[m];
}
// function to change the lipstick when clicked
function changelip() {
    if (n == (lips.length) - 1) {
        n = 0;
    }
    else {
        n++;
    }
    document.getElementById("lip").style.backgroundColor = lips[n];
}
// function to finish the game when clicked
document.getElementById("finish").addEventListener("click", function (e) {
    window.location.assign("dressupConfirm.html")
});
// open the readme.txt file
document.getElementById("readme").addEventListener("click", function (e) {
    window.location.assign("readme.txt")
});