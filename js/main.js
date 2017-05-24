/*global alert, prompt, console*/
var letter, k, i;
letter = "";

while (letter === "" || letter === null) {
    letter = prompt("Enter a Letter Please.");
}

for (i = 0; i < 10; i += 1) {

    for (k = 0; k <= i; k += 1) {
        document.write(letter);
    }
    document.write("<br>");
}