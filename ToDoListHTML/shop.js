document.addEventListener("DOMContentLoaded", function() {
    const backBtn = document.querySelector(".back-btn");
    backBtn.addEventListener("click", function() {
        window.location.href = "main.html"; // Replace with your main.html file path
    });
});

var mode = document.getElementById("mode");
        mode.onclick = function() {
            document.body.classList.toggle("dark-theme");
            if (document.body.classList.contains("dark-theme")) {
                mode.src = "icons/sun.PNG";
            } else {
                mode.src = "icons/moon.PNG";
            }
        }