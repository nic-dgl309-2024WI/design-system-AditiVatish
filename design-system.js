function toggleNavbar() {
    let hamburgerIcon = document.getElementById('ham-open');
    let closeIcon = document.getElementById('close-icon');
    let sideNav = document.getElementById('side-navbar');
    let topNav = document.getElementById('nv-link');
  
  
  
    hamburgerIcon.classList.toggle("show-icon");
    closeIcon.classList.toggle("show-icon");
    sideNav.classList.toggle("show-icon");
    topNav.classList.toggle("show-icon");
  
  
  
  }
  