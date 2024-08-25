// Function to dynamically load an HTML component
async function loadComponent(url, targetElementId) {
    try {
        const response = await fetch(url);
        const content = await response.text();
        document.getElementById(targetElementId).innerHTML = content;
    } catch (error) {
        console.error(`Failed to load component from ${url}:`, error);
    }
}

// Load the header and navbar
loadComponent('./components/header.html', 'header-placeholder');
loadComponent('./components/navbar.html', 'navbar-placeholder');

// JavaScript for handling tab navigation
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
        });

        // Countdown Timer Script
        function startCountdown(duration, display) {
            var timer = duration, hours, minutes, seconds;
            setInterval(function () {
                hours = parseInt(timer / 3600, 10);
                minutes = parseInt((timer % 3600) / 60, 10);
                seconds = parseInt(timer % 60, 10);

                hours = hours < 10 ? "0" + hours : hours;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = hours + ":" + minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration; // Restart the countdown (for demo purposes)
                }
            }, 1000);
        }

        window.onload = function () {
            var countdownDuration = 45 * 60 + 30; // 45 minutes and 30 seconds
            var countdownDisplay = document.getElementById('countdown');
            startCountdown(countdownDuration, countdownDisplay);
        };

    
        (function(d, s, id) {
            // Function to initialize the widget
            function initializeWidget(lat, lon) {
                const widgetContainer = document.querySelector('.tomorrow');
                widgetContainer.setAttribute('data-location-id', `${lat},${lon}`);
        
                if (d.getElementById(id)) {
                    if (window.__TOMORROW__) {
                        window.__TOMORROW__.renderWidget();
                    }
                    return;
                }
        
                const fjs = d.getElementsByTagName(s)[0];
                const js = d.createElement(s);
                js.id = id;
                js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        
            // Function to get location
            function getLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        function(position) {
                            const lat = position.coords.latitude;
                            const lon = position.coords.longitude;
                            initializeWidget(lat, lon);
                        },
                        function(error) {
                            console.error("Geolocation error:", error);
                            // Fallback: You can set a default location if geolocation fails
                            initializeWidget(40.7128, -74.0060); // Default to New York City
                        }
                    );
                } else {
                    console.error("Geolocation is not supported by this browser.");
                    // Fallback: Set a default location if geolocation is not supported
                    initializeWidget(40.7128, -74.0060); // Default to New York City
                }
            }
        
            // Call the function to get location
            getLocation();
        })(document, 'script', 'tomorrow-sdk');