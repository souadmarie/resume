(function(){

    function show_2_desktop(){
        $("#experience_2_answer").show();
        $("#experience_2_hide").show();
        $("#experience_2_show").hide();
    }
    function show_2_mobile(){
        $("#experience_2_answer_mobile").show();
        $("#experience_2_hide").show();
        $("#experience_2_show").hide();
    }
    function hide_2(){
        $("#experience_2_answer").hide();
        $("#experience_2_answer_mobile").hide();
        $("#experience_2_hide").hide();
        $("#experience_2_show").show(); 
    }

    function show_3_desktop(){
        $("#experience_3_answer").show();
        $("#experience_3_hide").show();
        $("#experience_3_show").hide();
    }
    function show_3_mobile(){
        $("#experience_3_answer_mobile").show();
        $("#experience_3_hide").show();
        $("#experience_3_show").hide();
    }
    function hide_3(){
        $("#experience_3_answer").hide();
        $("#experience_3_answer_mobile").hide();
        $("#experience_3_hide").hide();
        $("#experience_3_show").show(); 
    }

    function show_4_desktop(){
        $("#experience_4_answer").show();
        $("#experience_4_hide").show();
        $("#experience_4_show").hide();
    }
    function show_4_mobile(){
        $("#experience_4_answer_mobile").show();
        $("#experience_4_hide").show();
        $("#experience_4_show").hide();
    }
    function hide_4(){
        $("#experience_4_answer").hide();
        $("#experience_4_answer_mobile").hide();
        $("#experience_4_hide").hide();
        $("#experience_4_show").show(); 
    }

    function show_5_desktop(){
        $("#experience_5_answer").show();
        $("#experience_5_hide").show();
        $("#experience_5_show").hide();
    }
    function show_5_mobile(){
        $("#experience_5_answer_mobile").show();
        $("#experience_5_hide").show();
        $("#experience_5_show").hide();
    }
    function hide_5(){
        $("#experience_5_answer").hide();
        $("#experience_5_answer_mobile").hide();
        $("#experience_5_hide").hide();
        $("#experience_5_show").show(); 
    }

    function show_6_desktop(){
        $("#experience_6_answer").show();
        $("#experience_6_hide").show();
        $("#experience_6_show").hide();
    }
    function show_6_mobile(){
        $("#experience_6_answer_mobile").show();
        $("#experience_6_hide").show();
        $("#experience_6_show").hide();
    }
    function hide_6(){
        $("#experience_6_answer").hide();
        $("#experience_6_answer_mobile").hide();
        $("#experience_6_hide").hide();
        $("#experience_6_show").show(); 
    }
    




    $("#experience_2_hide").hide();
    $("#experience_2_answer").hide();
    $("#experience_2_answer_mobile").hide();
    $("#experience_2_show").click(function(){
        if ($(window).width() > 768) {
            show_2_desktop();
            hide_3();
            hide_4();
        }  else {
            show_2_mobile();
        }
    });
    $("#experience_2_hide").click(function(){
        hide_2();
    });



    $("#experience_3_hide").hide();
    $("#experience_3_answer").hide();
    $("#experience_3_answer_mobile").hide();
    $("#experience_3_show").click(function(){
        if ($(window).width() > 768) {
            show_3_desktop();
            hide_2();
            hide_4();
        }  else {
            show_3_mobile();
        }
    });
    $("#experience_3_hide").click(function(){
        hide_3();
    });




    $("#experience_4_hide").hide();
    $("#experience_4_answer").hide();
    $("#experience_4_answer_mobile").hide();
    $("#experience_4_show").click(function(){
        if ($(window).width() > 768) {
            show_4_desktop();
            hide_3();
            hide_2();
        }  else {
            show_4_mobile();
        }
    });
    $("#experience_4_hide").click(function(){
        hide_4();
    });



    $("#experience_5_hide").hide();
    $("#experience_5_answer").hide();
    $("#experience_5_answer_mobile").hide();
    $("#experience_5_show").click(function(){
        if ($(window).width() > 768) {
            show_5_desktop();
            hide_6();
        }  else {
            show_5_mobile();
        }
    });
    $("#experience_5_hide").click(function(){
        hide_5();
    });




    $("#experience_6_hide").hide();
    $("#experience_6_answer").hide();
    $("#experience_6_answer_mobile").hide();
    $("#experience_6_show").click(function(){
        if ($(window).width() > 768) {
            show_6_desktop();
            hide_5();
        }  else {
            show_6_mobile();
        }
    });
    $("#experience_6_hide").click(function(){
        hide_6();
    });


})();
