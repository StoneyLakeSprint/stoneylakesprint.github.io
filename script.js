function downloadCalendar() {
    // Create a Blob with the iCal data
// build a “.ics” calendar file for Stoney Lake Sprint 2025 in EDT
var icsData = new Blob([
    'BEGIN:VCALENDAR\n',
    'VERSION:2.0\n',
    'CALSCALE:GREGORIAN\n',
    'PRODID:-//Stoney Lake Sprint//EN\n',

    // time‐zone definition for Toronto (EST/EDT)
    'BEGIN:VTIMEZONE\n',
    'TZID:America/Toronto\n',
    'X-LIC-LOCATION:America/Toronto\n',
    'BEGIN:DAYLIGHT\n',
    'TZOFFSETFROM:-0500\n',
    'TZOFFSETTO:-0400\n',
    'TZNAME:EDT\n',
    'DTSTART:19700308T020000\n',
    'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\n',
    'END:DAYLIGHT\n',
    'BEGIN:STANDARD\n',
    'TZOFFSETFROM:-0400\n',
    'TZOFFSETTO:-0500\n',
    'TZNAME:EST\n',
    'DTSTART:19701101T020000\n',
    'RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\n',
    'END:STANDARD\n',
    'END:VTIMEZONE\n',

    'BEGIN:VEVENT\n',
    // unique ID
    'UID:20250705T093000-1234567890@stoneylakesprint.ca\n',
    // when the .ics was generated (UTC)
    'DTSTAMP:20250529T142543Z\n',
    // event start in Toronto time
    'DTSTART;TZID=America/Toronto:20250705T093000\n',
    // event end (1:00 PM)
    'DTEND;TZID=America/Toronto:20250705T120000\n',
    'SUMMARY:Stoney Lake Sprint 2025\n',
    'DESCRIPTION:Little Sprinters 1K race starts at 9:30 AM; ' + '5K Run & Walk starts at 10:00 AM. Registration opens at 8:30 AM at Viamede Resort.\n',
    'LOCATION:595 Mount Julian Viamede Road, Woodview, ON K0L 3E0\n',
    'END:VEVENT\n',
    'END:VCALENDAR\n'
], { type: 'text/calendar' });


    // Create a URL for the Blob
    var url = window.URL.createObjectURL(icsData);

    // Create a link element
    var link = document.createElement('a');
    link.href = url;

    // Set the filename
    link.setAttribute('download', 'StoneyLakeSprint2025.ics');

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Clean up
    document.body.removeChild(link);
}

var images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];
var currentIndex = 0;
var mainImage = document.querySelector('.main-image');
var thumbnailsContainer = document.querySelector('.thumbnail-container');
var thumbnails = [];

function updateMainImage() {
    mainImage.src = images[currentIndex];
}

function updateThumbnails() {
    thumbnailsContainer.innerHTML = '';
    images.forEach(function(image, index) {
        var thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.classList.add('thumbnail');
        thumbnail.onclick = function() {
            currentIndex = index;
            updateMainImage();
        };
        thumbnailsContainer.appendChild(thumbnail);
        thumbnails.push(thumbnail);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage();
}

setInterval(nextImage, 3000); // Change image every 3 seconds

updateMainImage();
updateThumbnails();


var readySetGo = document.getElementById('ready-set-go');
var ready = document.querySelector('.ready');
var set = document.querySelector('.set');
var go = document.querySelector('.go');

window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var readyOffset = ready.offsetTop;
    var setOffset = set.offsetTop;
    var goOffset = go.offsetTop;

    if (scrollTop >= readyOffset && !ready.classList.contains('active')) {
        ready.classList.add('active');
    }

    if (scrollTop >= setOffset && !set.classList.contains('active')) {
        set.classList.add('active');
    }

    if (scrollTop >= goOffset && !go.classList.contains('active')) {
        go.classList.add('active');
    }
});


var countDownDate = new Date("Jul 5, 2025 09:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "RACE ENDED";
  }
}, 1000);