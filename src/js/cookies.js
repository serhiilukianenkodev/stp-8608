document.addEventListener('DOMContentLoaded', () => {
  const cookiePopup = document.querySelector('.cookie-popup');
  const acceptBtn = document.querySelector('.cookie-accept');
  const declineBtn = document.querySelector('.cookie-decline');

  const cookieClicked = localStorage.getItem('cookieClicked');

  if (!cookieClicked) {
    cookiePopup.classList.add('show');
  }

  const handleClicked = click => {
    localStorage.setItem('cookieClicked', click);
    cookiePopup.classList.remove('show');
  };

  acceptBtn.addEventListener('click', () => handleClicked('accepted'));
  declineBtn.addEventListener('click', () => handleClicked('declined'));
});
