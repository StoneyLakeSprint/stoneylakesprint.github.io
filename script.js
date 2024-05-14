function downloadCalendar() {
    // Create a Blob with the iCal data
    var icsData = new Blob([
        'BEGIN:VCALENDAR\n',
        'VERSION:2.0\n',
        'PRODID:-//Example Corp.//iCalEvent//EN\n',
        'BEGIN:VEVENT\n',
        'UID:20220720T093000-1234567890@example.com\n',
        'DTSTAMP:20220720T093000Z\n',
        'DTSTART:20220720T091500\n',
        'DTEND:20220720T130000\n',
        'SUMMARY:Stoney Lake Sprint\n',
        'DESCRIPTION:Kids 1km race starts at 9:30 am. -- 5km run/walk starts at 10:00 am.\n',
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
    link.setAttribute('download', 'event.ics');

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Clean up
    document.body.removeChild(link);
}

var images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg']; // Replace with your image URLs
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


var countDownDate = new Date("Jul 20, 2024 09:30:00").getTime();

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