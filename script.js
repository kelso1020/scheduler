// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  
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

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // this selects and prints the current day of the week, month, date, and year on the webpage
  var currentDay = dayjs();  
  $('#currentDay').text(currentDay.format('dddd, MMMM D, YYYY'));

});
