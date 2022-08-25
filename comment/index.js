$(function() {
    var id = null;
    var scale = 0.7;
    var windowW = $(window).width();
    var windowH = $(window).height();

    //设置密码窗口
    var title_main = $(".title-main").text()
    if(title_main=="璃落自缚" || title_main=="群友自缚"){
        $(".password").fadeIn("fast");
        if (windowH >= 1400 || windowW >= 600){
            $(".password-inner").css("left", 600);
            $(".password-inner").css("top", 300);
            $(".password-inner").css("width", "300px");
            $(".password-inner").css("height", "100px");
            $(".password-inner").css("font-size", "20px");
        }
        else{
            $(".password-inner").css("top", windowH/3);
            $(".password-inner").css("width", windowW);
            $(".password-inner").css("height", "100px");
            $(".password-inner").css("font-size", "20px");
        }
        //验证密码
        $(".password-button").on("click", function() {
            password = $(".password-input").val();
            if(password==123456){
                $(".password").fadeOut("fast");
            }
            else{
                $(".password-alert").fadeIn("fast");
            }
        })
    }

    //监听所有图片以及可能尚未添加的<img>标签，并且显示大图
    $(".photo_block").on("click", "img", function() {
        id = $(this).attr("id");
        show(this);
    })

    //隐藏大图
    $(".big").on("click", "img", function() {
        $(".big").fadeOut("fast");
    })

    //显示大图
    function show(picture) {
        var src = $(picture).attr("src");

        //填充大图src
        $("#big_img").attr("src", src);

        //缩放图片。如果图片长>宽，则长边变为屏幕宽度的scale比例，如果此时高度大于屏幕高度
        //则再将高度缩放scale比例。反之同理
        var realWidth = picture.width;
        var realHight = picture.height;
        var newHeight, newWidth;
        if (realWidth > realHight) {
            newWidth = windowW * scale;
            newHeight = newWidth * realHight / realWidth;
            if (newHeight > realHight) {
                let temp = newHeight;
                newHeight = newHeight * scale;
                newWidth = newHeight * newWidth / temp;
            }
        } else {
            newHeight = windowH * scale;
            newWidth = newHeight * realWidth / realHight;
            if (newHeight < realHight) {
                let temp = newWidth;
                newWidth = newWidth * scale;
                newHeight = newWidth * newHight / temp;
            }
        }

        var padding_top = (windowH - newHeight) / 2;
        var padding_left = (windowW - newWidth) / 2;

        $("#big_img").css("width", newWidth); //以最终的宽度对图片缩放        
        $(".inner").css("padding-top", padding_top);
        $(".inner").css("padding-left", padding_left);
        $(".big").fadeIn("fast");
    }

})