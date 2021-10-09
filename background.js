const frequency = 0.2;

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ frequency });
	console.log(`Default frequency set to: ${frequency}`);
	chrome.storage.sync.set({ lang: 'spanish' });
	console.log(`Default language set to: Spanish`);
});