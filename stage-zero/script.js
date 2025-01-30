function updateTime() {
    const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();

    timeElement.textContent = now.toUTCString();

}

updateTime();
setInterval(updateTime, 1000)