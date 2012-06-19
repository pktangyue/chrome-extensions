$(function(){
    var href = document.location.href;
    if(href.indexOf("web.sanguosha.com") > -1){
        $('#topCommonNav').remove();
    }
    if(href.indexOf("www.douban.com") > -1){
        var handle_search_text = function(){
            this.value = '成员、小组、音乐人、主办方';
            this.style.color = '#D4D4D4';
        };
        var handle_input_basic = function(){
            this.value = '';
        };
        var handle_value = function(callback){
            return function(e){
                if((e.keyCode && e.keyCode === 13) || !e.keyCode ){
                    if(this.value === '少纠结'){
                        callback.call(this);
                    }
                }
            }
        };
        $('#search_text').blur(handle_value(handle_search_text)).keydown(handle_value(handle_search_text));
        $('input.input_basic').blur(handle_value(handle_input_basic)).keydown(handle_value(handle_input_basic));
    }
    chrome.extension.sendRequest({},function(response){});
});
