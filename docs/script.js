$(function () {

  const hour9 = $('#hour-9'),
        hour10 = $('#hour-10'),
        hour11 = $('#hour-11'),
        hour12 = $('#hour-12'),
        hour13 = $('#hour-13'),
        hour14 = $('#hour-14'),
        hour15 = $('#hour-15'),
        hour16 = $('#hour-16'),
        hour17 = $('#hour-17'),
        saveButton = $('.saveBtn'),
        eventAdded = $('#eventAdded'),
        nineAM = dayjs().set('hour', 9),
        tenAM = dayjs().set('hour', 10),
        elevenAM = dayjs().set('hour', 11),
        twelvePM = dayjs().set('hour', 12),
        thirteenPM = dayjs().set('hour', 13),
        fourteenPM = dayjs().set('hour', 14),
        fifteenPM = dayjs().set('hour', 15),
        sixteenPM = dayjs().set('hour', 16),
        seventeenPM = dayjs().set('hour', 17);

  // Really like setting the key to an ID and the value to the text in the time block. I was really hoping to use that later on. Also how a reaction for clicking save that fades in and out. One bug I did find is the Icon I tried calling both the button and the children (the icon) but the code would keep breaking. I do not know how to get both the button and the Icon within it to use my function. So I assigned the bigger of the two the Blue button space around the icon to the click event.
  saveButton.on('click', (event) => {
        event.preventDefault();
        let hourX = event.target.parentElement.id;
        let eventText = event.target.parentElement.children[1].value;
        localStorage.setItem(hourX, eventText);
        eventAdded.html('Event added to LocalStorage!').fadeIn().delay(3000).fadeOut();
  })

  // This seems very tedious and I feel like I should be able to iterate somehow but I am running short on time and cannot figure out how to dynamically pull the key as an ID like in the next comments. There is also a bug I keep seeing with hour17 and seventeenPM. I am just pointing out that I am aware of it. I have tried logging to the console when the bug happens and for some reason it reads the 4pm as 5pm. It will log as a difference of 0. Then when refreshed it will go back to a difference of +1. I do not know if that is a day light savings issue on dayjs or a loading error on my end. I also do not know if that effects the other time blocks being off by +/-1 hour. Not enough time to test further.

  let now = dayjs();

  if (now.diff(nineAM, 'hour') > 0) {
        hour9.removeClass('past present future')
        hour9.addClass('past')
  } else if (now.diff(nineAM, 'hour') < 0) {
        hour9.removeClass('past present future')
        hour9.addClass('future')
  } else {
        hour9.removeClass('past present future')
        hour9.addClass('present')
  }

  if (now.diff(tenAM, 'hour') > 0) {
        hour10.removeClass('past present future')
        hour10.addClass('past')
  } else if (now.diff(tenAM, 'hour') < 0) {
        hour10.removeClass('past present future')
        hour10.addClass('future')
  } else {
        hour10.removeClass('past present future')
        hour10.addClass('present')
  }

  if (now.diff(elevenAM, 'hour') > 0) {
        hour11.removeClass('past present future')
        hour11.addClass('past')
  } else if (now.diff(elevenAM, 'hour') < 0) {
        hour11.removeClass('past present future')
        hour11.addClass('future')
  } else {
        hour11.removeClass('past present future')
        hour11.addClass('present')
  }

  if (now.diff(twelvePM, 'hour') > 0) {
        hour12.removeClass('past present future')
        hour12.addClass('past')
  } else if (now.diff(twelvePM, 'hour') < 0) {
        hour12.removeClass('past present future')
        hour12.addClass('future')
  } else {
        hour12.removeClass('past present future')
        hour12.addClass('present')
  }

  if (now.diff(thirteenPM, 'hour') > 0) {
        hour13.removeClass('past present future')
        hour13.addClass('past')
  } else if (now.diff(thirteenPM, 'hour') < 0) {
        hour13.removeClass('past present future')
        hour13.addClass('future')
  } else {
        hour13.removeClass('past present future')
        hour13.addClass('present')
  }

  if (now.diff(fourteenPM, 'hour') > 0) {
        hour14.removeClass('past present future')
        hour14.addClass('past')
  } else if (now.diff(fourteenPM, 'hour') < 0) {
        hour14.removeClass('past present future')
        hour14.addClass('future')
  } else {
        hour14.removeClass('past present future')
        hour14.addClass('present')
  }

  if (now.diff(fifteenPM, 'hour') > 0) {
        hour15.removeClass('past present future')
        hour15.addClass('past')
  } else if (now.diff(fifteenPM, 'hour') < 0) {
        hour15.removeClass('past present future')
        hour15.addClass('future')
  } else {
        hour15.removeClass('past present future')
        hour15.addClass('present')
  }

  if (now.diff(sixteenPM, 'hour') > 0) {
        hour16.removeClass('past present future')
        hour16.addClass('past')
  } else if (now.diff(sixteenPM, 'hour') < 0) {
        hour16.removeClass('past present future')
        hour16.addClass('future')
  } else {
        hour16.removeClass('past present future')
        hour16.addClass('present')
  }

  if (now.diff(seventeenPM, 'hour') > 0) {
        hour17.removeClass('past present future')
        hour17.addClass('past')
  } else if (now.diff(seventeenPM, 'hour') < 0) {
        hour17.removeClass('past present future')
        hour17.addClass('future')
  } else {
        hour17.removeClass('past present future')
        hour17.addClass('present')
  }

  // There is probably a better way to do this but I am running short on time and this does in fact work just seems tedious. Would love to find a way to pull the 'key' as the ID and set that innerHTML to my 'value' dynamically.
  hour9[0].children[1].innerHTML = localStorage.getItem('hour-9');
  hour10[0].children[1].innerHTML = localStorage.getItem('hour-10');
  hour11[0].children[1].innerHTML = localStorage.getItem('hour-11');
  hour12[0].children[1].innerHTML = localStorage.getItem('hour-12');
  hour13[0].children[1].innerHTML = localStorage.getItem('hour-13');
  hour14[0].children[1].innerHTML = localStorage.getItem('hour-14');
  hour15[0].children[1].innerHTML = localStorage.getItem('hour-15');
  hour16[0].children[1].innerHTML = localStorage.getItem('hour-16');
  hour17[0].children[1].innerHTML = localStorage.getItem('hour-17');
  
  // Cannot get 'Do' or advancedFormat to work with DayJS. So the date does not include ordinals. If I try importing from Dayjs I do not have a node_module to pull from because of the way this assignment is adding dayjs to the HTML
  $('#currentDay').text(now.format('dddd, MMMM DD'));
  
});
