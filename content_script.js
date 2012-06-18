$(function(){
    $('#topCommonNav').remove();
    $('#Box_center').find('a[href*="/1699475315"]').closest('dl').remove();
    $('#search_text').blur(function(){
        if(this.value === '少纠结'){
            this.value = '';
        }
    });
    chrome.extension.sendRequest({},function(response){});
});
