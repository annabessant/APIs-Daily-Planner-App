$(document).ready(function () {
    let date = moment().format("MMMM Do YYYY");
    let day = moment().format("dddd"); // for showing day of week.
    $("#currentDay").html(day + ", " + date);

    $('.saveBtn').on('click', savePlan);
    function savePlan() {
        // to be completed 
    let plan = $(this).siblings('.description').val();
    let hour = $(this).parent().attr('id');

    // save in localStorage
    localStorage.setItem(hour, plan);
    } 

});