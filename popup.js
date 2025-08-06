document.getElementById('click-me').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.url) {
        alert(tab.url);
    } else {
        alert("Unable to get active tab URL.");
    }
});