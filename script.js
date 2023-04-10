const menuBtn = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menuIcon.classList.toggle('active');
  menuItems.classList.toggle('active');
});