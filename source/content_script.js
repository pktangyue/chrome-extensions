var href = document.location.href;
if(href.indexOf("web.sanguosha.com") > -1){
    $('#topCommonNav').remove();
}
if(href.indexOf("www.douban.com") > -1){
    var handle_search_text = function(){
        $('label[for="inp-query"]').show();
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
    $('input[name="q"]').blur(handle_value(handle_input_basic)).keydown(handle_value(handle_input_basic));
}
if(href.indexOf('www.weibo.com') > -1){
    $('.level_1_Box:nth-child(2)').remove();
    $('#pl_leftnav_group').find('[node-type="moreList"]').show();
}
if(href.indexOf('stackoverflow.com/questions') > -1){
    $('#adzerk2').remove();
    $('#hireme').remove();
}
chrome.extension.sendRequest({},function(response){});
