var hairs = ["black", "#000066", "tomato", "#993300", "#5c5c3d", "#000066"];
var tops = ["top1", "top2", "top3", "top4"];
var acc = ["acc1", "acc2", "acc3", "acc4"];
var eye = ["black", "#99ccff", "#ff99ff", "#993300", "#b3ff66", "#cc0066"]
var skin = ["#fff9e6", "#ffecb3", "#ffb366", "#4d2600"];
var lips = ["#ffb3b3", "#ff6347", "#ffa347", "#cc66ff", "#cc0000", "#cc0066"];
var j = 0;
var i = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
function chngehair() {
    if (i == (hairs.length) - 1) {
        i = 0;
    }
    else {
        i++;
    }
    document.getElementById("hair1").style.backgroundColor = hairs[i];
    document.getElementById("hair2").style.backgroundColor = hairs[i];
}
function chngetop() {
    document.getElementById(tops[j]).style.visibility = "hidden";
    if (j == (tops.length) - 1) {
        j = 0;
    }
    else {
        j++;
    }
    document.getElementById(tops[j]).style.visibility = "visible";
}
function chngeacc() {
    document.getElementById(acc[k]).style.visibility = "hidden";
    if (k == (acc.length) - 1) {
        k = 0;
    }
    else {
        k++;
    }
    document.getElementById(acc[k]).style.visibility = "visible";
}
function chngeeye() {
    if (l == (eye.length) - 1) {
        l = 0;
    }
    else {
        l++;
    }
    document.getElementById("eye1").style.backgroundColor = eye[l];
    document.getElementById("eye2").style.backgroundColor = eye[l];
}
function chngeskin() {
    if (m == (skin.length) - 1) {
        m = 0;
    }
    else {
        m++;
    }
    document.getElementById("face").style.backgroundColor = skin[m];
    document.getElementById("handl").style.backgroundColor = skin[m];
    document.getElementById("handr").style.backgroundColor = skin[m];
    document.getElementById("neck").style.backgroundColor = skin[m];
    document.getElementById("neck1").style.backgroundColor = skin[m];
    document.getElementById("body").style.backgroundColor = skin[m];
}
function chngelip() {
    if (n == (lips.length) - 1) {
        n = 0;
    }
    else {
        n++;
    }
    document.getElementById("lip").style.backgroundColor = lips[n];
}