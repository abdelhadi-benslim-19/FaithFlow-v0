document.addEventListener('DOMContentLoaded', () => {
    const calendarContainer = document.getElementById('calendar-container');

    function generateCalendar(year, month) {
        const months = [
            'Muharram', 'Safar', 'Rabi\' al-Awwal', 'Rabi\' al-Thani', 'Jumada al-Awwal', 'Jumada al-Thani',
            'Rajab', 'Sha\'ban', 'Ramadan', 'Shawwal', 'Dhu al-Qa\'dah', 'Dhu al-Hijjah'
        ];

        // This array should represent the number of days for each Islamic month.
        // Note: In a real-world scenario, use a library or API for accurate data.
        const daysInMonth = [
            30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29
        ];

        const table = document.createElement('table');
        table.className = 'calendar-table';

        // Header row with the month and year
        const headerRow = document.createElement('tr');
        const headerCell = document.createElement('th');
        headerCell.colSpan = 7;
        headerCell.textContent = `${months[month]} ${year}`;
        headerRow.appendChild(headerCell);
        table.appendChild(headerRow);

        // Day names row
        const daysRow = document.createElement('tr');
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(dayName => {
            const th = document.createElement('th');
            th.textContent = dayName;
            daysRow.appendChild(th);
        });
        table.appendChild(daysRow);

        // Creating rows for the calendar days
        const firstDay = new Date(year, month, 1).getDay();
        const days = daysInMonth[month];
        let row = document.createElement('tr');
        let cell;

        // Add empty cells for days before the start of the month
        for (let i = 0; i < firstDay; i++) {
            row.appendChild(document.createElement('td'));
        }

        // Add cells for each day in the month
        for (let i = 1; i <= days; i++) {
            cell = document.createElement('td');
            cell.textContent = i;
            row.appendChild(cell);

            if ((i + firstDay) % 7 === 0) {
                table.appendChild(row);
                row = document.createElement('tr');
            }
        }

        // Add the last row if there are leftover days
        if (row.children.length > 0) {
            table.appendChild(row);
        }

        calendarContainer.innerHTML = '';
        calendarContainer.appendChild(table);
    }

    // Generate calendar for the current month
    const now = new Date();
    generateCalendar(now.getFullYear(), now.getMonth());
});
