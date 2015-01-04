$(function() {
    var anchor = $("#anchor").val();
    if (anchor) {
        // 定位到锚点
        var top = $("#" + anchor).offset().top;
        var height = $("#" + anchor).height();
        $("html,body").animate({ scrollTop: top-height-30 }, 800);
    }
});