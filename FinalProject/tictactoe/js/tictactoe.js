$(document).ready(function () {
    var x = "x";
    var o = "o";
    var turns = 0;

    //board
    var space1 = $('#space1');
    var space2 = $('#space2');
    var space3 = $('#space3');
    var space4 = $('#space4');
    var space5 = $('#space5');
    var space6 = $('#space6');
    var space7 = $('#space7');
    var space8 = $('#space8');
    var space9 = $('#space9');

    // check to see if 0 has winning positions
    $('#board li').on('click', function () {
        if (space1.hasClass('o') && space2.hasClass('o') && space3.hasClass('o') || //horizontal win
            space4.hasClass('o') && space5.hasClass('o') && space6.hasClass('o') ||//horizontal win
            space7.hasClass('o') && space8.hasClass('o') && space9.hasClass('o') ||//horizontal win
            space1.hasClass('o') && space4.hasClass('o') && space7.hasClass('o') || //vertical win
            space2.hasClass('o') && space5.hasClass('o') && space8.hasClass('o') ||//vertical win
            space3.hasClass('o') && space6.hasClass('o') && space9.hasClass('o') ||//vertical win
            space1.hasClass('o') && space5.hasClass('o') && space9.hasClass('o') || //diagonal win
            space3.hasClass('o') && space5.hasClass('o') && space7.hasClass('o')//diagonal win
        ) { //alert 0 won the game
            prompt('Winner: O');
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
        }
        // check to see if x has winning positions
        else if (space1.hasClass('x') && space2.hasClass('x') && space3.hasClass('x') || //horizontal win
            space4.hasClass('x') && space5.hasClass('x') && space6.hasClass('x') ||//horizontal win
            space7.hasClass('x') && space8.hasClass('x') && space9.hasClass('x') ||//horizontal win
            space1.hasClass('x') && space4.hasClass('x') && space7.hasClass('x') || //vertical win
            space2.hasClass('x') && space5.hasClass('x') && space8.hasClass('x') ||//vertical win
            space3.hasClass('x') && space6.hasClass('x') && space9.hasClass('x') ||//vertical win
            space1.hasClass('x') && space5.hasClass('x') && space9.hasClass('x') || //diagonal win
            space3.hasClass('x') && space5.hasClass('x') && space7.hasClass('x') //diagonal win
        ) {
            // alert x won the game
            prompt('Winner: X');
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
        }
        // tie game
        else if (turns == 9) {
            prompt('Tie Game');
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
            turns = 0;
        }
        // space already in use
        else if ($(this).hasClass('disable')) {
            alert('This spot is already filled');
        }
        // turn has been taken
        else if (turns % 2 == 0) {
            turns++;
            $(this).text(o);
            $(this).addClass('disable o');
            if (space1.hasClass('o') && space2.hasClass('o') && space3.hasClass('o') || //horizontal win
                space4.hasClass('o') && space5.hasClass('o') && space6.hasClass('o') ||//horizontal win
                space7.hasClass('o') && space8.hasClass('o') && space9.hasClass('o') ||//horizontal win
                space1.hasClass('o') && space4.hasClass('o') && space7.hasClass('o') || //vertical win
                space2.hasClass('o') && space5.hasClass('o') && space8.hasClass('o') ||//vertical win
                space3.hasClass('o') && space6.hasClass('o') && space9.hasClass('o') ||//vertical win
                space1.hasClass('o') && space5.hasClass('o') && space9.hasClass('o') || //diagonal win
                space3.hasClass('o') && space5.hasClass('o') && space7.hasClass('o')//diagonal win
            ) {
                prompt('Winner: X');
                turns = 0;
            }
        }
            else {
                turns++;
                $(this).text(x);
                $(this).addClass('disable x');
                if (space1.hasClass('x') && space2.hasClass('x') && space3.hasClass('x') || //horizontal win
                    space4.hasClass('x') && space5.hasClass('x') && space6.hasClass('x') ||//horizontal win
                    space7.hasClass('x') && space8.hasClass('x') && space9.hasClass('x') ||//horizontal win
                    space1.hasClass('x') && space4.hasClass('x') && space7.hasClass('x') || //vertical win
                    space2.hasClass('x') && space5.hasClass('x') && space8.hasClass('x') ||//vertical win
                    space3.hasClass('x') && space6.hasClass('x') && space9.hasClass('x') ||//vertical win
                    space1.hasClass('x') && space5.hasClass('x') && space9.hasClass('x') || //diagxnal win
                    space3.hasClass('x') && space5.hasClass('x') && space7.hasClass('x')//diagxnal win
                ) {
                    prompt('Winner: X');
                    turns = 0;
                }
            }
        });
        // reset 
        $('#reset').on('click', function () {
            $('#board li').text(' ');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
            turns = 0;
        });
    })
// readme buttom
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