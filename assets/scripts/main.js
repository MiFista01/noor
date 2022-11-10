$(document).ready(function () {
    var page = 0
    for(let i of $(".wrapper").children()){
        if(i.className !="button_down"){
            $(i).slideUp(0);
        }
    }
    $(".home").slideDown(0);
    $("footer").slideDown(0);
    $("#button_down").click(function (e) { 
        e.preventDefault();
        $("div[page='"+page+"']").slideUp(200,()=>{
            page ++;
            $("div[page='"+page+"']").slideDown(200)
            if(page == 0){
                $(".button_up").hide(100);
            }else if (page == $(".wrapper").children().length-3) {
                $(".button_down").hide(100);
            }else{
                $(".button_down").show(100);
                $(".button_up").show(100);
            }
        });
        
    });
    $("#button_up").click(function (e) { 
        e.preventDefault();
        $("div[page='"+page+"']").slideUp(200,()=>{
            page --;
            $("div[page='"+page+"']").slideDown(200)
            if(page == 0){
                $(".button_up").hide(100);
            }else if (page == $(".wrapper").children().length-3) {
                $(".button_down").hide(100);
            }else{
                $(".button_down").show(100);
                $(".button_up").show(100);
            }
        });
    });
    $(".ques").click(function (e) { 
        e.preventDefault();
        $($(e.target).next()).toggle(500);
    });
    $(".pages").click(function (e) { 
        e.preventDefault();
        let click_page = $(e.target).attr("page");
        $("div[page='"+page+"']").slideUp(200,()=>{
            page = click_page;
            $("div[page='"+click_page+"']").slideDown(200)
            if(page == 0){
                $(".button_up").hide(100);
                $(".button_down").show(100);
            }else if (page == $(".wrapper").children().length-3) {
                $(".button_down").hide(100);
                $(".button_up").show(100);
            }else{
                $(".button_down").show(100);
                $(".button_up").show(100);
            }
        });

    });
});