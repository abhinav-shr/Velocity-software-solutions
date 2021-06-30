const pop = document.querySelectorAll('.pop')



window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) > document.body.offsetHeight-100) {
        
    pop.forEach((item, idx) => {
        
            item.classList.add('start-poping');
            
        
    })
}

    else{
        pop.forEach((item, idx) => {
        
            item.classList.remove('start-poping');
        
    })
}

};

const header = document.querySelector('header');

const transitionNavBar = () => {
    if (window.scrollY > 50){
        header.classList.add('header-active')
    }else {
        header.classList.remove('header-active')
    }
};

window.addEventListener('scroll',transitionNavBar)














const btn = document.querySelector(".btn");
const searchbar = document.querySelector(".searchbar");

btn.addEventListener('click',() => {
    searchbar.classList.toggle('active')}
    );



const btn2 = document.querySelector(".btn2");
const links = document.querySelector(".links");
const searchbar2 = document.querySelector(".searchbar2");
    
btn2.addEventListener('click',() => {
    searchbar2.classList.toggle('active');
    links.classList.toggle('hidden')}
    );







const navBtn = document.querySelector('button.navbutton');
const navigationPanel = document.querySelector('aside');

navBtn.addEventListener('click',() =>{
    navigationPanel.classList.toggle("active");
    navBtn.classList.toggle("active");
})
