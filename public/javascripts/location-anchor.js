$(function() {
    // 定位页面位置
    var anchor = $("#anchor").val();
    if (anchor && $("#" + anchor).offset()) {
        // 定位到锚点
        var top = $("#" + anchor).offset().top;
        var height = $("#" + anchor).height();
        $("html,body").animate({ scrollTop: top-height-30 }, 800);
    }
    // 显式【关于我们】链接
    $("#aboutUs").css('display', 'yes').css('z-index', 999999);
    $("#aboutUs").offset({left: $(window).width() - 50, top: $(window).scrollTop() + 100});
    // 显式【更新例示】链接
    $("#history").css('display', 'yes').css('z-index', 999999);
    $("#history").offset({left: $(window).width() - 50, top: $(window).scrollTop() + 150});
    // 显式【后退一步】链接
    if (!$("#homeTag").val()) {
        $("#goBack").css('display', 'yes').css('z-index', 999999);
        $("#goBack").offset({left: $(window).width() - 50, top: $(window).scrollTop() + 200});
    }
    // 显式【返回顶部】链接
    $("#scrollToTop").click(function(){
        $('html,body').animate({scrollTop:0}, 500);
    });
    $(window).scroll(function() {
        $("#aboutUs").css('display', 'yes').css('z-index', 999999);
        $("#aboutUs").offset({left: $(window).width() - 50, top: $(window).scrollTop() + 100});
        $("#history").css('display', 'yes').css('z-index', 999999);
        $("#history").offset({left: $(window).width() - 50, top: $(window).scrollTop() + 150});
        $("#goBack").css('display', 'yes').css('z-index', 999999);
        $("#goBack").offset({left: $(window).width() - 50, top: $(window).scrollTop() + 200});
        $("#scrollToTop").css('display', 'yes').css('z-index', 999999);
        $("#scrollToTop").offset({left: $(window).width() - 50, top: $(window).scrollTop() + 250});
        if ($(window).scrollTop() == 0) {
            $("#scrollToTop").css('display', 'none');
        }
    });
});