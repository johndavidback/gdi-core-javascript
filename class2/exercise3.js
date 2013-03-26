$(document).ready(function() {

    $("#big-box").mouseenter(function() {
        $(this).hide();
    });

    $("#small-box").mouseenter(function() {
        $(this).css('border', '10px solid green');
    }).mouseout(function() {
        $(this).css('border', '1px solid black');
    });

});