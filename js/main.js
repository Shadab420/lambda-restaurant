let mobileMenuBtn = document.getElementById("mobile-menu-btn");

function showMenu(){
    let menu = document.querySelector("nav .nav-links");

    if(menu.style.display == 'none' || menu.style.display == '') {
        
        mobileMenuBtn.innerHTML = '<i class="far fa-times-circle"></i>'
        menu.style.display = 'block';
    }
    else{
        mobileMenuBtn.innerHTML = '<i class="fas fa-hamburger"></i>'
        menu.style.display = 'none';
    } 
}

//smooth scroll for cross browser
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 250, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });