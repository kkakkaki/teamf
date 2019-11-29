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

    $(function () {
        const content1 = document.getElementById("content-html");
        const container1 = document.getElementById('fukidashi-container1');
        content1.addEventListener('mouseover', function () {
            content1.classList.toggle('over1');
            container1.classList.toggle('over1');
        });
        content1.addEventListener('mouseout', function () {
            content1.classList.toggle('over1');
            container1.classList.toggle('over1');
        });
    });




});

