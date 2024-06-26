var colorarray = ["#e58e26", "#f9b4ab", "#ff0000", "#78e08f", "#fd79a8"];
var colorbox = document.getElementById("colorbox");


function bgchange(color) {
    let colorarray = ["#e58e26", "#f9b4ab", "#ff0000", "#78e08f", "#fd79a8"];
    document.body.style.background = colorarray[color];
}
 

 
colorarray.forEach(function (color, index) {
    let span = document.createElement("span");
    span.style.backgroundColor = color;
    span.addEventListener("click", function () {
        bgchange(index);
        button.remove()
    });
    colorbox.appendChild(span);
});