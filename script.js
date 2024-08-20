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
