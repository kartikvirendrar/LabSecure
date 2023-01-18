async function saveHistory(url, title) {
	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Accept', 'application/json');
	headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5000');
	headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5000/api/addWebHistory');
	headers.append('Access-Control-Allow-Origin', '*');
	headers.append('Access-Control-Allow-Credentials', 'true');
	headers.append('GET','POST','OPTIONS');

	await fetch(`http://127.0.0.1:8000/api/addWebHistory`, {
		"method": "POST", headers: headers, body: JSON.stringify({collection: "Lab102-1", url: String(url), title:String(title)})
	})
		.then(response => {
			return response.json();
		})
		.catch(err => {
			console.error(err);
		});
}

chrome.tabs.onUpdated.addListener(function (tabId, chg, tab) {
	if (['chrome://newtab/', 'about:blank'].includes(tab.url)) {
		return;
	}
	if ((chg.status == 'complete')) {
		var url = tab.url;
		var title = tab.title;
		saveHistory(url, title);
		// window.alert(url);
	}
});
