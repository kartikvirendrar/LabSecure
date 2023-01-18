window.onload = function () { 
    var bg = chrome.extension.getBackgroundPage();
    if (!bg) {
		chrome.runtime.getBackgroundPage(init);
		return;
	}
    var allHistory = bg.incHist;
    document.getElementById('act').innerHTML=allHistory;
}