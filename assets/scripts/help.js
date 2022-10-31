let clicked;
$(document).ready(function () {
    clicked = $("#email");
    $(clicked).css("background-color", "rgba(231,177,250,0.7)");
    $("#number_form").slideUp(0);
    $("#assistent_form").slideUp(0);

    $("#email").click(function (e) { 
        e.preventDefault();
        change_buttons(e)
    });
    $("#number").click(function (e) { 
        e.preventDefault();
        change_buttons(e)
    });
    $("#assistent").click(function (e) { 
        e.preventDefault();
        change_buttons(e)
    });
});

function change_buttons(e){
    let target;
    if(e.target.id == ""){
        target = $(e.target).parent()[0];
    }else{
        target = e.target;
    }
    try {
        if(clicked.id == undefined){
            clicked = clicked[0]
        }
        console.log(clicked)
        $(clicked).css("background-color", "rgba(231,177,250,0.0)");
        $(target).css("background-color", "rgba(231,177,250,0.7)");
        $("#"+clicked.id+"_form").slideUp(200, function(){
            $("#"+target.id+"_form").slideDown(500);
        });
    } catch (error) {
        
    }
    
    clicked = target;
}