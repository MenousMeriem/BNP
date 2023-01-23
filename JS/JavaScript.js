document
.querySelector(".hamburger__container")
.addEventListener("click",(e)=> {
    document.querySelector(".hamburger__content").classList.toggle("active")
    document.querySelector(".hamburger__container").classList.toggle("active")
})




// const Temoi_Wrapper = document.querySelector('.Temoi_Wrapper');
// const indications = [...document.querySelectorAll('indications button')]

// let currentTestimontial = 0; //

// indications.forEach(item, i) => ({
//     item.addEventListener('click' , () => {
//         indications[currentTestimontial].classList.remove('active');
//         Temoi_Wrapper.style.marginLeft = ' -$(100 * i)%' ; 
//         item.classList.add('indi_active') ;
//         currentTestimontial = 1 ;
//     })
    
// })