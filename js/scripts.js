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

    $("#feta").hover(function() {

        $("imge1").fadeToggle();
    });

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

        alert("We have recived your message dear " + name + " of " + email + ", " + " and we will get back to you");

        event.preventDefault()
    }
};