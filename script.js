// Sticky banner

window.onscroll = function () {stickyHeader()};
const header = document.getElementById("banner");

// Get offset position of banner
const sticky = header.offsetTop; 

// Add sticky class to header when scroll position reached, remove sticky class when you leave scroll position
function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

