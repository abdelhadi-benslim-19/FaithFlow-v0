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
