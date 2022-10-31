// append and insertbefore
const div = document.getElementById('A');
div.appendChild(document.createElement('p'));



document.getElementById('A').innerHTML = '<strong>Hi</strong>';
document.getElementById('B').outerHTML = '<div class = "head" > Whatsup </div>';


//remove and replace child
var divA = document.getElementById('a');
// divA.parentNode.removeChild(divA);

divA.style.width = "100px";
divA.style.backgroundColor = "red";
divA.style.fontWeight = "50";

