function toggleNavbar() {

    document.getElementById('ham-open').classList.toggle("show-icon");
    document.getElementById('close-icon').classList.toggle("show-icon");
    document.getElementById('side-navbar').classList.toggle("show-icon"); 
    document.getElementById('nv-link').classList.toggle("show-icon"); 
}


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

document.addEventListener("DOMContentLoaded", function() {
  const reviews = document.querySelectorAll('.review');
  const paginationButtons = document.querySelectorAll('.pagination-btn');

  let currentPage = 0;

  function showReviews(pageIndex) {
    reviews.forEach((review, index) => {
      if (index === pageIndex) {
        review.classList.add('active');
      } else {
        review.classList.remove('active');
      }
    });
  }

  function setActiveButton(buttonIndex) {
    paginationButtons.forEach((button, index) => {
      if (index === buttonIndex) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  paginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentPage = index;
      showReviews(currentPage);
      setActiveButton(currentPage);
    });
  });

  showReviews(currentPage);
  setActiveButton(currentPage);
});

document.addEventListener("DOMContentLoaded", function() {
  const faqQuestions = document.querySelectorAll(".faq__question");

  faqQuestions.forEach(function(question) {
    question.addEventListener("click", function() {
      const answer = this.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
});
