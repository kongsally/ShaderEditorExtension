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
    console.log(data.detail.avg_ms);
    chrome.runtime.sendMessage({ avg_ms: data.detail.avg_ms});
});

document.addEventListener("shader_program", function(data) {
    console.log(data.detail.p_id);
    chrome.runtime.sendMessage({ p_id: data.detail.p_id});
});

