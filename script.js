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

