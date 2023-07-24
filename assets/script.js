document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const userID = 'service_pc6du9g';
    const templateID = 'template_i6ro7p7';

    emailjs.sendForm(userID, templateID, this)
    .then(function() {
        console.log('SUCCESS!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Sorry, an error occurred while sending the message. Please try again later.');
      });
  });