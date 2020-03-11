document.getElementById("readme").addEventListener("click", function () {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("game").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "readme.txt", true);
    xhttp.send();
});

document.getElementById("tictactoe").addEventListener("click", function () {
    var xhr = new XMLHttpRequest();   
    xhr.onload = function () {
        if (xhr.status === 200) {
            responseObject = JSON.parse(xhr.responseText);
            array = responseObject.tictactoe;
            processItem(array);
        }
    };
    xhr.open('GET', 'tictactoe.json', true);        
    xhr.send(null);                                 
});

document.getElementById("dressup").addEventListener("click", function () {
    var xhr = new XMLHttpRequest();   
    xhr.onload = function () {
        if (xhr.status === 200) {
            responseObject = JSON.parse(xhr.responseText);
            array = responseObject.dressup;
            processItem(array);
        }
    };
    xhr.open('GET', 'dressup.json', true);        
    xhr.send(null);                                 
});
document.getElementById("numbers").addEventListener("click", function () {
    var xhr = new XMLHttpRequest();   
    xhr.onload = function () {
        if (xhr.status === 200) {
            responseObject = JSON.parse(xhr.responseText);
            array = responseObject.numbers;
            processItem(array);
        }
    };
    xhr.open('GET', 'numbers.json', true);        
    xhr.send(null);                                 
});

function processItem(array) {
    var newContent = '';
    for (var i = 0; i < array.length; i++) {
        newContent += '<p>Name: ' + array[i].Name + '<br>';
        newContent += 'Age category: ' + array[i].Age + '<br>';
        newContent += 'Players: ' + array[i].Players + '<br>';
        newContent += 'Goal: ' + array[i].Goal + '</p>';
        newContent += '<hr>';
    }
    document.getElementById('game').innerHTML = newContent;
}