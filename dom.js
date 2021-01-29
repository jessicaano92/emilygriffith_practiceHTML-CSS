document.querySelector("#reset").addEventListener("click", resetButtonHandler);
document.querySelector("#ghosting").addEventListener("mouseover", function() { this.remove(); });
document.querySelector("#resize").addEventListener("mouseenter", doubleWidth);
document.querySelector("#resize").addEventListener("mouseleave", resetWidth);
document.querySelector("body").addEventListener("keyup", noDigits);




