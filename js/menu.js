$(window).load(function () {
    $(function () {
        var topBtn = $('#hamburger-area');
        topBtn.hide();
        //スクロールが100に達したらボタン表示
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                topBtn.fadeIn();
            } else {
                topBtn.fadeOut();
            }
        });
    });
});
