document.addEventListener('DOMContentLoaded', () => {
    // Function to get the user's location
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(fetchPrayerTimes, handleGeolocationError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    // Function to handle geolocation errors
    function handleGeolocationError(error) {
        console.error("Geolocation error: ", error);
        alert("Unable to retrieve your location.");
    }

    // Function to fetch prayer times from the API
    function fetchPrayerTimes(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const date = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

        // Update API URL if necessary; placeholder used here
        const apiUrl = `http://api.aladhan.com/v1/timingsByAddress/${date}?latitude=${lat}&longitude=${lon}&method=2`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.code === 200) {
                    displayPrayerTimes(data.data.timings);
                } else {
                    console.error("API error: ", data.status);
                    alert("Failed to fetch prayer times.");
                }
            })
            .catch(error => {
                console.error("Fetch error: ", error);
                alert("An error occurred while fetching prayer times.");
            });
    }

    // Function to display prayer times in the UI
    function displayPrayerTimes(timings) {
        const prayerTimesContainer = document.getElementById('prayer-times-container');
        prayerTimesContainer.innerHTML = `
            <div class="flex items-center justify-between bg-white p-4 shadow rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M9.5 6.5C9.99153 5.9943 11.2998 4 12 4M14.5 6.5C14.0085 5.9943 12.7002 4 12 4M12 4V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.3633 10.6357L16.9491 12.05" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M3 17H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M5.63657 10.6356L7.05078 12.0498" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M21 17H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M21 20H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <span class="text-lg font-semibold">Fajr</span>
                <span class="text-lg">${timings.Fajr}</span>
            </div>
            <div class="flex items-center justify-between bg-white p-4 shadow rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <span class="text-lg font-semibold">Dhuhr</span>
                <span class="text-lg">${timings.Dhuhr}</span>
            </div>
            <div class="flex items-center justify-between bg-white p-4 shadow rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <span class="text-lg font-semibold">Asr</span>
                <span class="text-lg">${timings.Asr}</span>
            </div>
            <div class="flex items-center justify-between bg-white p-4 shadow rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M9.5 7.5C9.99153 8.0057 11.2998 10 12 10M14.5 7.5C14.0085 8.0057 12.7002 10 12 10M12 10V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.3633 10.6357L16.9491 12.05" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M3 17H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M5.63657 10.6356L7.05078 12.0498" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M21 17H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M21 20H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <span class="text-lg font-semibold">Maghrib</span>
                <span class="text-lg">${timings.Maghrib}</span>
            </div>
            <div class="flex items-center justify-between bg-white p-4 shadow rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M21.5 14.5L18.5 11.5L21.5 8.5L21.5 14.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.5 14.5L18.5 11.5L21.5 8.5L21.5 14.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 12L8 16V4L12 8L16 4L20 8V16L12 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="text-lg font-semibold">Isha</span>
                <span class="text-lg">${timings.Isha}</span>
            </div>
        `;
    }

    // Call the function to get location and fetch prayer times
    getLocation();
});
