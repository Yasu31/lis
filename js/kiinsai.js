$(function() {
    $("a[href^=#]").click(function(){
        var elmID = $(this).attr("href");
        var posi = 0;
         
        if($(elmID).size()){
            posi = $(elmID).offset().top - 100;
            BodySlider(posi);
            return false;
        }
    });
    function BodySlider(HashOffset){
        $("html,body").animate({
            scrollTop: HashOffset
        }, 700);
    }
});

$(function() {
    var oldPos_id;
    var newPos_id;
     
    function init(){
        changeNavColor();
    }
    window.onload = init;
     
     
    $(window).scroll(function(){
        changeNavColor();
    });
     
    function changeNavColor(){
        newPos_id = getCurrentPosition();
        if(newPos_id != oldPos_id){
            setNavColor();
        }
        oldPos_id = newPos_id;
    }
     
    function setNavColor(){
        navTarget1 = $('#nav' + parseInt(newPos_id) + ' a');
        navTarget2 = $('#nav' + parseInt(oldPos_id) + ' a');
         
        navTarget1.animate({
            'opacity': 1
        });
        navTarget1.css('color', '#73aeb3');
         
        navTarget2.animate({
            'opacity': 1.0
        });
        navTarget2.css('color', '#999');
    }
     
    function getCurrentPosition(){
        var y_top = $(this).scrollTop();
        var content1_y = $('#content0').height() - y_top;
        var content2_y = $('#content1').height() + content1_y;
        var content3_y = $('#content2').height() + content2_y;
        var content4_y = $('#content3').height() + content3_y;
        var content5_y = $('#content4').height() + content4_y;
         
        if(content1_y - 100 > 0){
            currentPosition = 0;
        } else {
            if(content2_y - 100 > 0){
                currentPosition = 1;
            } else {
                if(content3_y - 100 > 0){
                    currentPosition = 2;
                } else {
                	if(content4_y - 100 > 0){
                    currentPosition = 3;
                    } else {
                    	if(content5_y - 100 > 0){
                    		currentPosition = 5;
                    	} else {
                    		currentPosition = 4;
                    	}
                    }
                }
            }
        }
        return currentPosition;
    }
});