// $(document).ready(function() {
//     $("h1").click(function() {
//         alert("this is  a header!");
//     });
// });

// $(document).ready(function() {
//     $(".design").click(function() {
//         $("showme1").slideToggle();
//         $("pic1").hide();
//     });
// });


$(document).ready(function() {

    //     $(".col-md-4").click(function() {
    //         $(".hide-in").toggle();
    //         $(".pic1").toggle();
    //     });

    $(".pic1").click(function() {
        $(".hide-in").slideToggle()
    });

    $(".hide-in").click(function() {
        $(".pic1").slideToggle()
    });
});