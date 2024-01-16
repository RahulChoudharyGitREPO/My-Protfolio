const scrollTopBtn = document.querySelector('.scrollToTop-btn');

window.addEventListener('scroll',function(){
    scrollTopBtn.classList.toogle('active', window.scrollY > 500)
})

scrollTopBtn.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
window.addEventListener('scroll',() =>{
    const section = document.querySelectorAll('section');
    const scrollY = window.pageYoffsetTop;

    section.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute('id');
        
        if(scrollY > sectionToop && scrollY <= sectionTop + sectionHeight){
            document.querySelector("nav-items a[href*=" + id + "]").classList.add('active');

        }
        else{
            document.querySelector('.nav-items a[href*=' + id + ']').classList.remove(active);
        }
    })

})


const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}




function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("saved-theme", getCurrentTheme());
  }

  const getCurrentThemee = () => document.body.classList.contains("dark-theme") ? "dark" : "light";

  const savedThemee = localStorage.getItem("saved-theme");

  if (savedThemee) {
      document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
  }



//   responsive


const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');
const navItem = document.querySelector('.nav-items a')

menuBtn.addEventListener("click",() =>{
 navigation.classList.add("active")
});

closeBtn.addEventListener("click",() =>{
    navigation.classList.remove("active")
   });
   
   navItem.forEach((navItem) => {
    navItem.addEventListener("click",() => {
        navigation.classList.remove("active");
    })
   })

   ScrollReveal({ reset: true,
                  distance: '60px',
                  duration: 2500,
                  delay: 100


});
ScrollReveal().reveal('.home .info h2',{delay: 500, origin: 'left'});
// ScrollReveal().reveal('.home .info h2',{delay: 500, origin: 'left'});
