const button = document.querySelector('.custom-button');
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close');

button.addEventListener('click', () => {
    let screenWidth = window.innerWidth;
    let sidebarWidth = screenWidth * 0.25; // 15% of screen width
    document.getElementById("mySidebar").style.width = sidebarWidth + "px";
    document.getElementById("main").style.marginRight = sidebarWidth + "px";
});

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
} 