function toggleNavbar() {
  let hamburgerIcon = document.getElementById('ham-open');
  let closeIcon = document.getElementById('close-icon');
  let sideNav = document.getElementById('side-navbar');

  hamburgerIcon.classList.toggle("show-icon");
  closeIcon.classList.toggle("show-icon");
  sideNav.classList.toggle("show-icon");

  // Toggle body overflow to prevent scrolling when the side navbar is open
  document.body.classList.toggle("no-scroll");
}

// Close the side navbar when a link is clicked
document.querySelectorAll('#side-navbar a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('ham-open').classList.remove('show-icon');
    document.getElementById('close-icon').classList.remove('show-icon');
    document.getElementById('side-navbar').classList.remove('show-icon');
    document.body.classList.remove('no-scroll');
  });
});
