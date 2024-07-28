document.addEventListener("DOMContentLoaded", function() {
    const seriesOptions = [
        { name: 'basic1', label: 'Basic 1 (Seed Series)', image: 'icons/l6seed.PNG', price: 10 },
        { name: 'basic2', label: 'Basic 2 (Flower Series)', image: 'icons/l6flower.PNG', price: 20 },
        { name: 'basic3', label: 'Basic 3 (Lily Series)', image: 'icons/l6lily.PNG', price: 30 },
        { name: 'basic4', label: 'Basic 4 (Rose Series)', image: 'icons/l6rose.PNG', price: 35 },
        { name: 'basic5', label: 'Basic 5 (Sunflower Series)', image: 'icons/l6sunflower.PNG', price: 40 }
    ];

    function renderShopItems() {
        const shopContainer = document.querySelector('.shop-container');
        shopContainer.innerHTML = '';

        const unlockedSeries = JSON.parse(localStorage.getItem('unlockedSeries')) || [];

        seriesOptions.forEach(series => {
            const seriesDiv = document.createElement('div');
            seriesDiv.classList.add('shop-item');

            const seriesImg = document.createElement('img');
            seriesImg.src = series.image;
            const seriesLabel = document.createElement('span');
            seriesLabel.textContent = series.label;
            const unlockButton = document.createElement('button');
            unlockButton.textContent = `Unlock for ${series.price} droplets`;

            if (unlockedSeries.includes(series.name)) {
                unlockButton.textContent = 'Unlocked';
                unlockButton.disabled = true;
                unlockButton.classList.add('unlocked');
            } else {
                unlockButton.addEventListener('click', function() {
                    unlockSeries(series.name, series.price);
                });
            }

            seriesDiv.appendChild(seriesImg);
            seriesDiv.appendChild(seriesLabel);
            seriesDiv.appendChild(unlockButton);
            shopContainer.appendChild(seriesDiv);
        });
    }

    function unlockSeries(seriesName, price) {
        const waterDroplets = parseInt(localStorage.getItem('waterDroplets')) || 0;

        if (waterDroplets >= price) {
            let unlockedSeries = JSON.parse(localStorage.getItem('unlockedSeries')) || [];
            if (!unlockedSeries.includes(seriesName)) {
                unlockedSeries.push(seriesName);
                localStorage.setItem('unlockedSeries', JSON.stringify(unlockedSeries));

                localStorage.setItem('waterDroplets', waterDroplets - price);
                updateDropletCountDisplay(); // Update count display
                alert(`${seriesName} unlocked!`);
                renderShopItems(); // Re-render the shop items to update the button state
            } else {
                alert(`${seriesName} is already unlocked.`);
            }
        } else {
            alert('Not enough water droplets to unlock this series.');
        }
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    function goBack() {
        window.history.back();
    }

    function updateDropletCountDisplay() {
        const dropletCountElement = document.getElementById('droplet-count');
        const waterDroplets = parseInt(localStorage.getItem('waterDroplets')) || 0;
        if (dropletCountElement) {
            dropletCountElement.textContent = waterDroplets;
        }
    }

    const themeButton = document.getElementById('mode');
    themeButton.addEventListener('click', toggleDarkMode);

    const backButton = document.querySelector('.back-btn svg');
    backButton.addEventListener('click', goBack);

    // Load the saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Initial load of droplet count
    updateDropletCountDisplay();

    renderShopItems();
});

document.addEventListener("DOMContentLoaded", function () {
    // Elements
    var dropletCountSpan = document.getElementById("droplet-count");
    var resetUnlockedSeriesButton = document.getElementById("reset-unlocked-series-button");

    // Retrieve water droplet count from localStorage
    var waterDroplets = parseInt(localStorage.getItem("waterDroplets")) || 0;
    dropletCountSpan.textContent = waterDroplets;

    // Dark mode toggle functionality
    var mode = document.getElementById("mode");
    mode.onclick = function () {
        document.body.classList.toggle("dark-theme");
        mode.src = document.body.classList.contains("dark-theme") ? "icons/sun.PNG" : "icons/moon.PNG";
    }

    // Back button functionality
    var backBtn = document.querySelector(".back-btn");
    backBtn.addEventListener("click", function () {
        window.location.href = "main.html"; // Replace with your main.html file path
    });

    // Reset unlocked series button functionality
    resetUnlockedSeriesButton.addEventListener("click", function () {
        // Reset to only have "basic1" series unlocked
        var unlockedSeries = ["basic1"];
        localStorage.setItem("unlockedSeries", JSON.stringify(unlockedSeries));

        alert("Unlocked series have been reset to only include Basic 1 (Seed Series).");

        // Optional: Reload the page or refresh the series display
        // location.reload();
    });

    // Load shop items and other functionalities
    // Additional code for loading shop items or other shop-related logic can go here
});
