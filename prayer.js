document.addEventListener('DOMContentLoaded', () => {
    // Function to get the user's location (simulated for now)
    function getLocation() {
        // Simulate fetching prayer times directly for now
        setTimeout(() => {
            // Placeholder prayer times
            const simulatedTimings = {
                Fajr: "05:00 AM",
                Dhuhr: "12:00 PM",
                Asr: "03:00 PM",
                Maghrib: "06:00 PM",
                Isha: "08:00 PM"
            };
            displayPrayerTimes(simulatedTimings);
        }, 1000);
    }

    // Function to display prayer times in the UI
    function displayPrayerTimes(timings) {
        const prayerTimesContainer = document.getElementById('prayer-times-container');
        
        // Clear existing content
        prayerTimesContainer.innerHTML = '';

        // Create and append prayer times widgets
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
            Dhuhr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>`,
            Asr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
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
</svg>`
        };

        // Create and append prayer times widgets
        for (const [prayer, time] of Object.entries(timings)) {
            const widget = document.createElement('div');
            widget.className = 'flex items-center justify-between bg-white p-4 shadow rounded mb-2';
            widget.innerHTML = `
                ${icons[prayer] || `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none"><path d="M12 2L2 22H22L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`}
                <span class="text-lg font-semibold">${prayer}</span>
                <span class="text-lg">${time}</span>
            `;
            prayerTimesContainer.appendChild(widget);
        }
    }

    // Call the function to get location and fetch prayer times (simulated)
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

