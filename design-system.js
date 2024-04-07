function toggleNavbar() {

    document.getElementById('ham-open').classList.toggle("show-icon");
    document.getElementById('close-icon').classList.toggle("show-icon");
    document.getElementById('side-navbar').classList.toggle("show-icon"); 
    document.getElementById('nv-link').classList.toggle("show-icon"); 


document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const projects = document.querySelectorAll('.products');
    const totalProjects = projects.length;
    const carousel = document.querySelector('.carousel-container');
    
    document.querySelector('.carousel-button-prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalProjects) % totalProjects;
      updateCarousel();
    });
    
    document.querySelector('.carousel-button-next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalProjects;
      updateCarousel();
    });
    
    function updateCarousel() {
      const projectWidth = projects[0].clientWidth;
      const newTransform = -currentIndex * (projectWidth + 40); // 40 is the margin-right value of .pcards
      carousel.style.transform = `translateX(${newTransform}px)`;
    }
})
