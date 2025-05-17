const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  successMsg.style.display = 'block';
  form.reset();
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 5000);
});
