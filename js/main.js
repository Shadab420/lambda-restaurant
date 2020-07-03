let mobileMenuBtn = document.getElementById("mobile-menu-btn");

function showMenu(){
    let menu = document.querySelector("nav .nav-links");

    if(menu.style.display == 'none') {
        
        mobileMenuBtn.innerHTML = '<i class="far fa-times-circle"></i>'
        menu.style.display = 'block';
    }
    else{
        mobileMenuBtn.innerHTML = '<i class="fas fa-hamburger"></i>'
        menu.style.display = 'none';
    } 
}