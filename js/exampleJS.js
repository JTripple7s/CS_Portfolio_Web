// Simple form handler (for demonstration only)
document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset();
  });