chrome.runtime.onMessage.addListener(function(message, sender, response) {
    if (message.loadURL) {
        var newurl = sender.tab.url.replace("/", "ezp.lib.unimelb.edu.au/");
        chrome.tabs.update(sender.tab.id, {url: newURL})     
    }
});
