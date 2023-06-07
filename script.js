function handleLearnMoreClick(event) {
    event.preventDefault(); // Prevent the default link behavior
    var courseTitle = event.target.parentElement.querySelector('h3').textContent;
    alert("Clicked on the 'Learn More' button for the course: " + courseTitle);
  }
  
  // Attach event listeners to the "Learn More" buttons
  var learnMoreButtons = document.querySelectorAll('.course a');
  for (var i = 0; i < learnMoreButtons.length; i++) {
    learnMoreButtons[i].addEventListener('click', handleLearnMoreClick);
  }