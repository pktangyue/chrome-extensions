var element = document.getElementById('topCommonNav')
element.parentNode.removeChild(element);
chrome.extension.sendRequest({},function(response){});
