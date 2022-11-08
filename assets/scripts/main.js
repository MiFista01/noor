$(document).ready(function () {
    let page = 0
    for(let i of $(".wrapper").children()){
        if(i.className !="button_down"){
            $(i).slideUp(0);
        }
    }
    $(".home").slideDown(0);
    console.log($(".wrapper").children())
    $("#button_down").click(function (e) { 
        e.preventDefault();
        for(let i = 0; i <$(".wrapper").children().length-2; i++){
            if(i == page){
                ($(".wrapper").children()[i].className !="button_down")
                $($(".wrapper").children()[i]).slideUp(200, function(){
                    $($(".wrapper").children()[i+1]).slideDown(200);
                    $(".button_up").show();
                    page += 1
                    if(page == $(".wrapper").children().length-3){
                        $(".button_down").hide();
                    }
                });
            }
        }
    });
    $("#button_up").click(function (e) { 
        e.preventDefault();
        for(let i = 0; i <$(".wrapper").children().length-2; i++){
            if(i == page){
                ($(".wrapper").children()[i].className !="button_down")
                $($(".wrapper").children()[i]).slideUp(200, function(){
                    $($(".wrapper").children()[i-1]).slideDown(200);
                    $(".button_up").show();
                    page -= 1
                    if(page == 0){
                        $(".button_up").hide();
                    }
                    else{
                        $(".button_down").show();
                    }
                });
            }
        }
    });
    $(".ques").click(function (e) { 
        e.preventDefault();
        $($(e.target).next()).toggle(500);
    });
});