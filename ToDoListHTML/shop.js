document.addEventListener("DOMContentLoaded", function() {
    const seriesOptions = [
        { name: 'basic1', label: 'Basic 1 (Seed Series)', image: 'icons/l6seed.PNG', price: 10 },
        { name: 'basic2', label: 'Basic 2 (Flower Series)', image: 'icons/l6flower.PNG', price: 20 },
        { name: 'sunflower', label: 'Sunflower Series', image: 'icons/l6sunflower.PNG', price: 40 } // New series
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

    const themeButton = document.getElementById('mode');
    themeButton.addEventListener('click', toggleDarkMode);

    const backButton = document.querySelector('.back-btn svg');
    backButton.addEventListener('click', goBack);

    // Load the saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    renderShopItems();
});
