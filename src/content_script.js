window.addEventListener('message', function(event) {

	if (event.source !== window) {
		return;
	}
	var message = event.data;

	// Only accept messages that we know are ours
	if (typeof message !== 'object' || message === null ) {
		return;
	}

	chrome.runtime.sendMessage(message);
});

document.addEventListener("avg_ms", function(data) {
    chrome.runtime.sendMessage({ avg_ms: data.detail.avg_ms});
});

