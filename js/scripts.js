$(document).ready(function() {

    $(".pal").click(function() {
        $(".hide-in").slideToggle(1000);
        $(".pic1").slideToggle(1000);
    });

    $(".col").click(function() {
        $(".hide-in1").slideToggle(1000);
        $(".pic2").slideToggle(1000);
    });

    $(".bran").click(function() {
        $(".hide-in2").slideToggle(1000);
        $(".pic3").slideToggle(1000);
    });

    $("#mouse").click(function() {

        $("#services").fadeToggle(1000);
        $("#services").fadeToggle(5000);
    });

    $(".imge4-layer").hover(function() {

        $("#imge4").fadeOut(1000);
        $("#imge4").fadeIn();

    })

    $(".imge5-layer").hover(function() {

        $("#imge5").fadeOut(1000);
        $("#imge5").fadeIn();

    })

    $(".imge6-layer").hover(function() {

        $("#imge6").fadeOut(1000);
        $("#imge6").fadeIn();

    })

    $(".imge7-layer").hover(function() {

        $("#imge7").fadeOut(1000);
        $("#imge7").fadeIn();

    })

    $(".imge8-layer").hover(function() {

        $("#imge8").fadeOut(1000);
        $("#imge8").fadeIn();

    })

    $(".imge1-layer").hover(function() {

        $("#imge1").fadeOut(1000);
        $("#imge1").fadeIn();

    })

    $(".imge2-layer").hover(function() {

        $("#imge2").fadeOut(1000);
        $("#imge2").fadeIn();

    })

    $(".imge3-layer").hover(function() {

        $("#imge3").fadeOut(1000);
        $("#imge3").fadeIn();

    })
});


function validate() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var text = document.getElementById("area").value;

    if (name === "") {
        alert("Please fill in your name");
        return false;

    } else if (email === "") {
        alert("Please insert your email!");
        return false;

    } else if (text === "") {

        alert("There is no text to submit!");
    } else {

        alert("We have recieved your message dear " + name + " and we will get back to you");


    };
};