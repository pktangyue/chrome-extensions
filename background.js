chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo.url === "http://weibo.com/u/1699475315" || changeInfo.url === "http://www.douban.com/people/38636701/"){
        chrome.tabs.remove(tabId);
    }
});
chrome.extension.onRequest.addListener(function(request,sender,sendResponse){
    chrome.pageAction.show(sender.tab.id);
});
