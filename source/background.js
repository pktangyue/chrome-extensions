chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo.url === "http://www.weibo.com/u/1699475315" || changeInfo.url === "http://www.douban.com/people/38636701/"){
        chrome.tabs.remove(tabId);
    }
    if(changeInfo.url.indexOf('http://www.weibo.com/at/comment') > -1){
        var code = "setInterval(function(){ $('#Box_center').find('a[href*=\"/1699475315\"]').closest('dl').remove(); },1000);";
        chrome.tabs.executeScript(tabId, {code : code});
    }
});
chrome.extension.onRequest.addListener(function(request,sender,sendResponse){
    chrome.pageAction.show(sender.tab.id);
});
