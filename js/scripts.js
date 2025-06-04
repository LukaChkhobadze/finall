$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,         
      autoplayTimeout: 3000,   
      autoplayHoverPause: true 
    });
  });


  document.getElementById("userIcon").addEventListener("click", function () {
      const dropdown = document.getElementById("userDropdown");
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  window.addEventListener("click", function (e) {
      const icon = document.getElementById("userIcon");
      const dropdown = document.getElementById("userDropdown");
      if (!icon.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.style.display = "none";
      }
  });
