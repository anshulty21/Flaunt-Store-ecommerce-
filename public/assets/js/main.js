/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
     if(toggle && nav){
         toggle.addEventListener('click', ()=>{
             nav.classList.toggle('show')
         })
     }
}

showMenu('nav-toggle','nav-menu')
/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link'),
      navMenu = document.getElementById('nav-menu')

  function linkAction(){
      navMenu.classList.remove('show')

  }    
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
          const sectionHeight = current.offsetHeight
          const sectionTop = current.offsetTop - 50
          sectionId = current.getAttribute('id')


          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
              document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
          }else{ 
              document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')

               }
          })


    }


/*===== CHANGE COLOR HEADER =====*/ 
window.onscroll = ()=>{
    const nav = document.getElementById('header')
    if(this.scrollY >=200) nav.classList.add('scroll-header');  else nav.classList.remove('scroll-header')

}

/*BUTTON RIPPLE */
const buttons = document.querySelectorAll(".button1");

buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.classList.add('ripples')
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';

    button.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});



/*Reveal username on desktops when clicked*/

var button = document.getElementById('userdialog'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('userflash');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
      
    }
    else {
        div.style.display = 'block';
    }
};


