/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery.fn.outerHTML = function (s) {
    return s
            ? this.before(s).remove()
            : jQuery("<p>").append(this.eq(0).clone()).html();
};

function load($template, $parent, $data) {
    $colnedObj = $template.clone();
    $colnedObj.show();
    $colnedObj.attr('data-template', 'no');
    var html = $colnedObj.outerHTML();

    for (var key in $data) {
        html = html.replace('{{' + key + '}}', $data[key]);
    }
    $parent.append(html);

}

function loadReq($loop, item) {
    $template = $loop.find('*[data-template=yes]').eq(0);
    $big = $(item).first();
    $parent = $template.parent();

    var requestData = $big.data('request');
    console.log($big.data('route'));
    $.get($big.data('route'), requestData, function (dataInfo) {
        $.each(dataInfo.data, function (index, item) {
            load($template, $parent, item);
        });
        $('data-loading-image').hide(); //hide loading image once data is received

        if ((dataInfo.paging === null) || (dataInfo.paging.next === null)) {
            $loadMore = $loop.find('*[data-load-more=yes]').eq(0);
            $loadMore.fadeOut(1000)
        } else {
            $big.data('route', dataInfo.paging.next);
        }

    });
}



$(document).ready(function () {
    $('*[data-template=yes]').hide();

    $('*[data-loop=yes]').each(function (index, item) {
        $loadMore = $(this).find('*[data-load-more=yes]').eq(0);
        $loop = $(this);
        loadReq($(this), item);
        $loadMore.click(function () {
            loadReq($loop, item);
        });
    });


});