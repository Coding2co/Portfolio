 
    var theme=document.querySelector(".mode");
 
theme.addEventListener("click",function(){ 
     var body= document.querySelector(".body");
     var footer=document.querySelector("footer");
     var content=document.querySelector(".container");
     body.classList.toggle("dark");
     
   if(body.classList.contains("dark")){
    theme.innerHTML="Dark";
    theme.style.background="black";
    theme.style.color="white";
    footer.classList.remove("back");
    content.classList.remove("content");


   }
   else{
   theme.innerHTML="Light";
   theme.style.background="white";
   theme.style.color="black";
   footer.classList.add("back");
   content.classList.add("content");
   }


});

/*
document.querySelector(".mode").addEventListener("click",function(){
    this.innerHTML="dark";
    this.style.background="black";
    this.style.color="white";
   var body=document.querySelector("h1");
   body.classList.add("dark");


   var content=document.querySelector(".container");
    var footer=document.querySelector("footer");

    content.style.background="black";
    content.style.color="white";
    footer.style.background="black";
    footer.style.color="white";


    this.innerHTML="dark";
    this.style.background="black";
    this.style.color="white";
   
    
})*/