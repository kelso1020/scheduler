// variable to identify the save buttons
var saveButton = $('.saveBtn');

$(function () {
// this is a click event for all save buttons on the webpage
  saveButton.on('click', function() {
    // variable to identify the text content being entered into each specific timeblock
    var scheduleInput = $(this).siblings('textarea').val();
    // variable to identify each individual time block with its associated save button
    var hourBlock = $(this).closest(".time-block").attr("id");
    // if text is entered in a time block and the save button is clicked, the text content
    // is saved to localstorage
    if (scheduleInput) {
      localStorage.setItem(hourBlock, JSON.stringify(scheduleInput));
    };
  });
  
  // new variable to select the current hour of the current day with dayjs
  var currentTime = dayjs().hour();

  // function to change the color of each time block depending on what time it is
  function changeColor() {
    $('.time-block').each(function() {
      const hour = parseInt(this.id);
      if (hour === currentTime) {
        $(this).addClass('present');
      } else if (hour > currentTime) {
        $(this).addClass('future');
      } else {
        $(this).addClass('past');
      }
    });
  };

  changeColor();

  $(function () {
    // function targeting each time block
    $('.time-block').each(function () {
      var hourBlock = $(this).attr('id');
      var storedInput = localStorage.getItem(hourBlock);
      // if a scheduled event is saved to localstorage, that scheduled event will remain on display
      // even if the webpage is refreshed
      if (storedInput) {
        $(this).find('textarea').val(JSON.parse(storedInput));
      }
    });
  });
  
  // this selects and prints the current day of the week, month, date, and year on the webpage
  var currentDay = dayjs();  
  $('#currentDay').text(currentDay.format('dddd, MMMM D, YYYY'));
});
