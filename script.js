// Function to Save Page as PDF
function saveAsPDF() {
    window.print();
}

// Show Scroll-Up Button when Scrolling
window.onscroll = function () {
    let scrollUp = document.getElementById("scrollUp");
    if (document.documentElement.scrollTop > 200) {
        scrollUp.style.display = "block";
    } else {
        scrollUp.style.display = "none";
    }
};

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
