let clicked = false;
let button_clicked
$(document).ready(function () {
    button_clicked = $("#email");
    $(button_clicked).css("background-color", "rgba(231,177,250,0.7)");
    $("#number_form").slideUp(0);
    $("#assistent_form").slideUp(0);

    $("#email").click(function (e) { 
        e.preventDefault();
        if (clicked == false){
            change_buttons(e)
            clicked = true
            setTimeout(()=>{clicked = false},700)
        }
        
    });
    $("#number").click(function (e) { 
        e.preventDefault();
        if (clicked == false){
            change_buttons(e)
            clicked = true
            setTimeout(()=>{clicked = false},700)
        }
    });
    $("#assistent").click(function (e) { 
        e.preventDefault();
        if (clicked == false){
            change_buttons(e)
            clicked = true
            setTimeout(()=>{clicked = false},700)
        }
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
        if(button_clicked.id == undefined){
            button_clicked = button_clicked[0]
        }
        $(button_clicked).css("background-color", "rgba(231,177,250,0.0)");
        $(target).css("background-color", "rgba(231,177,250,0.7)");
        $("#"+button_clicked.id+"_form").slideUp(200, function(){
            $("#"+target.id+"_form").slideDown(500);
        });
    } catch (error) {
        
    }
    
    button_clicked = target;
}