

function outputUpdate(height_amount) {
	document.querySelector('#num').value = height_amount;
}

function findUserEntry(){
  // get the height the user typed upon input
    var heightStr = document.getElementById('height').value;

    //  convert the string to an int
    var height = parseInt(heightStr);

    //find what user clicked for symbol. indexes options of the select input
    var symbolElem = symbolSelect.options[symbolSelect.selectedIndex].value;

    //calls drawPyramid with newly aquired variables
    drawPyramid(height, symbolElem);

}



/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height, symbol) {
    // var symbolElem = document.getElementById("symbol")
    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
