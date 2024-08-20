document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('button[data-target]');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');

            tabs.forEach(t => t.classList.remove('border-b-2', 'border-blue-500'));
            this.classList.add('border-b-2', 'border-blue-500');

            contents.forEach(content => {
                if (content.id === targetId) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });

    // Default to the first tab
    if (tabs.length > 0) {
        tabs[0].click();
    }

    // Request user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            loadPrayerTimes(latitude, longitude);
        }, error => {
            console.error('Error getting location:', error);
            document.getElementById('prayer-times-container').innerHTML = '<p class="text-red-500">Failed to get location. Please enable location services.</p>';
        });
    } else {
        document.getElementById('prayer-times-container').innerHTML = '<p class="text-red-500">Geolocation is not supported by this browser.</p>';
    }

    // Function to load prayer times
    function loadPrayerTimes(latitude, longitude) {
        const apiKey = 'http://api.aladhan.com/v1/timingsByAddress/:date'; // Replace with your Aladhan API key
        const apiUrl = `http://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`;

        fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(data => {
            const timings = data.data.timings;
            const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
            document.getElementById('prayer-times-container').innerHTML = prayers.map(prayer => `
                <div class="flex items-center justify-between bg-white p-4 shadow rounded">
                    <span class="text-lg font-semibold">${prayer}</span>
                    <span class="text-lg">${timings[prayer]}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v4m0 0v4m0-4h4m-4 0H8m4 12v-4m0 4v-4m0 4h-4m4 0h4m-4-4v-4" />
                    </svg>
                </div>
            `).join('');
        })
        .catch(error => {
            console.error('Error fetching prayer times:', error);
            document.getElementById('prayer-times-container').innerHTML = '<p class="text-red-500">Failed to load prayer times.</p>';
        });
    }
});
