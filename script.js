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

    // let plan = $(this).siblings('.description').val();
    // let hour = $(this).parent().attr('id');

    // // save in localStorage
    // localStorage.setItem(hour, plan);
    function colorCodePlans() {
    // get current number of hours
    let currentTime =  moment().format("H");
    console.log("currentTime = ", currentTime);

    $('.time-block').each(function () {
        let eventTime = parseInt($(this).attr('id').split('-')[1]);
  
        // check if we've moved past this time
        if (eventTime < currentTime) {
          $(this).addClass('past');
        } else if (eventTime === currentTime) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }

    colorCodePlans();
});