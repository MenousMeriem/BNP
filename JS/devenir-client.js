
function setup() {
	chatbot.loadFiles(['bot.rive']);
}

window.onload = setup;

//  the first two buton of the carosell 

try{

    document.querySelector("#show-login").addEventListener("click",function(){
        document.getElementsByClassName("popup")[0].classList.add("active2");
      
    });
    document.querySelector(".popup .close-btn").addEventListener("click",function(){
        document.querySelector(".popup").classList.remove("active2");
    });
}catch{
    
}

try{

    document.querySelector("#show-login2").addEventListener("click",function(){
        document.getElementsByClassName("popup")[0].classList.add("active2");
      
    });
    document.querySelector(".popup .close-btn").addEventListener("click",function(){
        document.querySelector(".popup").classList.remove("active2");
    });
}catch{
    
}
//  end of the  two buton of the carosell 



//  the first two buton   Je deviens client    popup2         of the reclam 3 part 1 and part 2 




try{

    document.querySelector("#show-login3").addEventListener("click",function(){
        document.getElementsByClassName("popup2")[0].classList.add("active3");
      
    });
    document.querySelector(".popup2 .close-btn").addEventListener("click",function(){
        document.querySelector(".popup2").classList.remove("active3");
    });
}catch{
    
}

//                   J’accède au formulaire       pop up 2       of the reclam 3 part 1 and part 2 

try{

    document.querySelector("#show-login4").addEventListener("click",function(){
        document.getElementsByClassName("popup2")[0].classList.add("active3");
      
    });
    document.querySelector(".popup2 .close-btn").addEventListener("click",function(){
        document.querySelector(".popup2").classList.remove("active3");
    });
}catch{
    
}

//                   Je prends rendez-vous      pop up 3       of the reclam 3 part 1 and part 2 

try{

    document.querySelector("#show-login5").addEventListener("click",function(){
        document.getElementsByClassName("popup3")[0].classList.add("active4");
      
    });
    document.querySelector(".popup3 .close-btn").addEventListener("click",function(){
        document.querySelector(".popup3").classList.remove("active4");
    });
}catch{
    
}



document
.querySelector(".hamburger__container")
.addEventListener("click",(e)=> {
    document.querySelector(".hamburger__content").classList.toggle("active8")
    document.querySelector(".hamburger__container").classList.toggle("active8")
})