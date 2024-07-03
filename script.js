const handleDate = () => {
    const now = new Date();
    const watDate = new Date(now.getTime() + 1 * 60 * 60 * 1000);
    const currentTimeWAT = watDate.toUTCString().replace('GMT', 'WAT');

    const options = { weekday: 'long', timeZone: 'UTC' };
    const currentDay = watDate.toLocaleDateString('en-US', options);

    document.querySelector('[data-testid="currentTimeUTC"]').innerText = currentTimeWAT;
    document.querySelector('[data-testid="currentDay"]').innerText = currentDay;
}

document.addEventListener('DOMContentLoaded', handleDate);

setInterval(handleDate, 1000);