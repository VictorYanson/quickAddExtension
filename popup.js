async function sendUrlToApi(url) {
  try {
    const response = await fetch('http://127.0.0.1:8000/echo-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: url })
    });

    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }

    const data = await response.json();
    return data.url;

  } catch (error) {
    return error.message;
  }
}

document.getElementById('click-me').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  if (tab && tab.url) {
    console.log(tab.url);
    const result = await sendUrlToApi(tab.url);
    console.log(result);
  } else {
    alert("Unable to get active tab URL.");
  }
});
