$(function(){
    $('#topCommonNav').remove();
    $('#search_text').blur(function(){
        if(this.value === '少纠结'){
            this.value = '';
        }
    });
    chrome.extension.sendRequest({},function(response){});
});
