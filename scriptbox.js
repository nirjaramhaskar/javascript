var currentTime = new Date();
var hours = currentTime.getHours();

var greeting;

if (hours < 12) {
  greeting = 'Good morning!';
} else if (hours < 18) {
  greeting = 'Good afternoon!';
} else {
  greeting = 'Good evening!';
}

// Show the custom notification
showNotification(greeting);

function showNotification(message) {
  var notification = document.getElementById('notification');
  var notificationText = document.getElementById('notificationText');

  notificationText.innerText = message;
  notification.style.display = 'block';

  // Automatically hide the notification after 3 seconds
  setTimeout(function () {
    notification.style.display = 'none';
  }, 3000);
}

function closeNotification() {
  var notification = document.getElementById('notification');
  notification.style.display = 'none';
}
