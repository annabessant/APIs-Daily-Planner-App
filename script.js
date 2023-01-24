$(document).ready(function () {
    let date = moment().format("MMMM Do YYYY");
    let day = moment().format("dddd"); // for showing day of week.
    $("#currentDay").html(day + ", " + date);



});