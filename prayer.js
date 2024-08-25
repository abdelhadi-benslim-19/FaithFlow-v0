// prayer-times.js

document.addEventListener('DOMContentLoaded', () => {
    // Function to get the user's location and fetch prayer times
    async function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                const apiUrl = `http://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=3`; // Adjust the method as needed

                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();

                    if (data.code === 200) {
                        const timings = data.data.timings;
                        displayPrayerTimes(timings);
                    } else {
                        console.error("Error fetching prayer times:", data);
                    }
                } catch (error) {
                    console.error("Error:", error);
                }
            }, (error) => {
                console.error("Error getting location:", error);
                // Fallback location or user message can be handled here
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
            // Fallback location or user message can be handled here
        }
    }

    // Function to display prayer times in the UI
    function displayPrayerTimes(timings) {
        const prayerTimesContainer = document.getElementById('prayer-times-container');
        
        // Clear existing content
        prayerTimesContainer.innerHTML = '';
    
        // Icons for different prayers
        const icons = {
            Fajr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M9.5 6.5C9.99153 5.9943 11.2998 4 12 4M14.5 6.5C14.0085 5.9943 12.7002 4 12 4M12 4V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.3633 10.6357L16.9491 12.05" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M3 17H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M5.63657 10.6356L7.05078 12.0498" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M21 17H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M21 20H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>`,
            Sunrise: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M9.5 6.5C9.99153 5.9943 11.2998 4 12 4M14.5 6.5C14.0085 5.9943 12.7002 4 12 4M12 4V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.3633 10.6357L16.9491 12.05" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M3 17H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M5.63657 10.6356L7.05078 12.0498" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M21 17H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M21 20H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>`,
            Dhuhr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>`,
            Asr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>`,
            Sunset: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M9.5 7.5C9.99153 8.0057 11.2998 10 12 10M14.5 7.5C14.0085 8.0057 12.7002 10 12 10M12 10V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.3633 10.6357L16.9491 12.05" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M3 17H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M5.63657 10.6356L7.05078 12.0498" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M21 17H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M21 20H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>`,
            Maghrib: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M9.5 7.5C9.99153 8.0057 11.2998 10 12 10M14.5 7.5C14.0085 8.0057 12.7002 10 12 10M12 10V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.3633 10.6357L16.9491 12.05" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M3 17H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M5.63657 10.6356L7.05078 12.0498" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M21 17H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M21 20H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>`,
            Isha: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,
            Imsak: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M20.5 14.469C19.3635 15.0758 18.0654 15.4199 16.687 15.4199C12.2097 15.4199 8.58014 11.7903 8.58014 7.31302C8.58014 5.9346 8.92416 4.63654 9.53102 3.5C5.50093 4.44451 2.5 8.0617 2.5 12.3798C2.5 17.4167 6.58325 21.5 11.6202 21.5C15.9383 21.5 19.5555 18.4991 20.5 14.469Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M21.5 12C21.5 6.75329 17.2467 2.5 12 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,
            Midnight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M21.0985 7.84477C20.458 8.55417 19.5311 9 18.5 9C16.567 9 15 7.433 15 5.5C15 4.46895 15.4458 3.54203 16.1552 2.90149M21.0985 7.84477C21.6774 9.11025 22 10.5174 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.4826 2 14.8898 2.32262 16.1552 2.90149M21.0985 7.84477C20.0998 5.66155 18.3384 3.90018 16.1552 2.90149" stroke="currentColor" stroke-width="1.5" />
    <path d="M10 8H10.0064" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7 14H7.00635" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16 16C16 17.1046 15.1046 18 14 18C12.8954 18 12 17.1046 12 16C12 14.8954 12.8954 14 14 14C15.1046 14 16 14.8954 16 16Z" stroke="currentColor" stroke-width="1.5" />
</svg>`,
            Firstthird: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M8.37574 3C8.16183 3.07993 7.95146 3.16712 7.74492 3.26126M20.7177 16.3011C20.8199 16.0799 20.9141 15.8542 21 15.6245M18.4988 19.3647C18.6705 19.2044 18.8365 19.0381 18.9963 18.866M15.2689 21.3723C15.463 21.2991 15.6541 21.22 15.8421 21.1351M12.156 21.9939C11.9251 22.0019 11.6926 22.0019 11.4616 21.9939M7.78731 21.1404C7.96811 21.2217 8.15183 21.2978 8.33825 21.3683M4.67255 18.9208C4.80924 19.0657 4.95029 19.2064 5.0955 19.3428M2.6327 15.6645C2.70758 15.8622 2.78867 16.0569 2.87572 16.2483M2.00497 12.5053C1.99848 12.2972 1.9985 12.0878 2.00497 11.8794M2.62545 8.73714C2.69901 8.54165 2.77864 8.34913 2.8641 8.1598M4.65602 5.47923C4.80068 5.32514 4.95025 5.17573 5.1045 5.03124" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5M13.5 12H16M12 10.5V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M22 12C22 6.47715 17.5228 2 12 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>`,
            Lastthird: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M2 15C2.14277 15.4274 2.31023 15.8431 2.50062 16.2452M4.12547 18.7463C4.44158 19.1137 4.781 19.4596 5.14137 19.7814M9 22C8.55224 21.8557 8.11701 21.6824 7.69641 21.4822" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12M12 13.5V16M10.5 12H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>`
        };
    
        for (const [prayer, time] of Object.entries(timings)) {
            const widget = document.createElement('div');
            widget.className = 'prayer-widget flex items-center justify-between p-4 bg-white border-b border-gray-200';
            widget.innerHTML = `
                <span class="flex items-center space-x-5">
                    <span class="text-gray-700">${icons[prayer] || ''}</span>
                    <span class="font-semibold text-gray-900">${prayer}</span>
                </span>
                <span class="text-gray-700">${time}</span>
            `;
            prayerTimesContainer.appendChild(widget);
        }
    }
    

    // Initial call to get prayer times
    getLocation();
});



document.addEventListener('DOMContentLoaded', () => {
    const dhikrContent = document.getElementById('dhikr-content');
    const addDhikrButton = document.getElementById('add-dhikr');

    const dhikrList = [
        "SubhanAllah (سبحان الله) - Glory be to Allah",
        "Alhamdulillah (الحمد لله) - All praise be to Allah",
        "Allahu Akbar (الله أكبر) - Allah is the Greatest",
        "La ilaha illallah (لا إله إلا الله) - There is no deity except Allah",
        "Bismillah (بسم الله) - In the name of Allah",
        "Astaghfirullah (أستغفر الله) - I seek forgiveness from Allah"
    ];

    function addDhikr(dhikr) {
        const dhikrItem = document.createElement('div');
        dhikrItem.className = 'dhikr-item';
        dhikrItem.innerHTML = `
            <span>${dhikr}</span>
            <button class="bg-red-500 text-white p-1 rounded">Remove</button>
        `;
        dhikrItem.querySelector('button').addEventListener('click', () => {
            dhikrItem.remove();
        });
        dhikrContent.appendChild(dhikrItem);
    }

    // Add initial Dhikr items
    dhikrList.forEach(dhikr => addDhikr(dhikr));

    // Add new Dhikr item
    addDhikrButton.addEventListener('click', () => {
        const newDhikr = prompt("Enter new Dhikr:");
        if (newDhikr) {
            addDhikr(newDhikr);
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const duaContent = document.getElementById('dua-content');
    const addDuaButton = document.getElementById('add-dua');

    const duaList = [
        "اللهم اجعلني من الذين يستمعون القول فيتبعون أحسنه - O Allah, make me among those who listen to the word and follow the best of it.",
        "اللهم إني أعوذ بك من الهم والحزن - O Allah, I seek refuge in You from worry and sadness.",
        "ربنا لا تؤاخذنا إن نسينا أو أخطأنا - Our Lord, do not impose blame upon us if we have forgotten or made a mistake.",
        "اللهم اغفر لي ولوالدي وللمؤمنين - O Allah, forgive me, my parents, and the believers.",
        "اللهم ارزقني من حيث لا أحتسب - O Allah, grant me sustenance from where I do not expect.",
        "اللهم صل على محمد وعلى آل محمد - O Allah, send blessings upon Muhammad and the family of Muhammad."
    ];

    function addDua(dua) {
        const duaItem = document.createElement('div');
        duaItem.className = 'dua-item';
        duaItem.innerHTML = `
            <span>${dua}</span>
            <button>Remove</button>
        `;
        duaItem.querySelector('button').addEventListener('click', () => {
            duaItem.remove();
        });
        duaContent.appendChild(duaItem);
    }

    // Add initial Dua items
    duaList.forEach(dua => addDua(dua));

    // Add new Dua item
    addDuaButton.addEventListener('click', () => {
        const newDua = prompt("Enter new Dua:");
        if (newDua) {
            addDua(newDua);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch Hadiths from the new API
    async function fetchHadiths() {
        const url = 'https://hadith2.p.rapidapi.com/collection';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '6cf4029601msh0aab7a805c12541p1b076cjsn79451d7a480c', // Replace with your RapidAPI key
                'x-rapidapi-host': 'hadith2.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json(); // Parse response as JSON
            displayHadiths(result);
        } catch (error) {
            console.error("Fetch error: ", error);
            alert("An error occurred while fetching Hadiths.");
        }
    }

    // Function to display Hadiths in the UI
    function displayHadiths(data) {
        const hadithContainer = document.getElementById('hadith-container');
        hadithContainer.innerHTML = ''; // Clear any existing content

        // Check if data has a structure to display
        if (data && Array.isArray(data)) {
            data.forEach(hadith => {
                const hadithElement = document.createElement('div');
                hadithElement.className = 'bg-white p-4 shadow rounded';
                hadithElement.innerHTML = `
                    <h3 class="text-lg font-semibold mb-1">${hadith.title || 'Hadith Title'}</h3>
                    <p>${hadith.content || 'Hadith Content'}</p>
                `;
                hadithContainer.appendChild(hadithElement);
            });
        } else {
            hadithContainer.innerHTML = '<p>No Hadiths available.</p>';
        }
    }

    // Fetch Hadiths when the page loads
    fetchHadiths();
});
