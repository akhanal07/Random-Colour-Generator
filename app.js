let btn = document.querySelector("button");

btn.addEventListener("click",hello); 


function hello() {
    console.log("Generated")

    let randomcolor=change();
    

    let h1= document.querySelector("h1");
    h1.innerText=randomcolor;


   let div=document.querySelector("div");
   div.style.backgroundColor= randomcolor;


    console.log("Done")
}



function change(){
   let red = Math.floor(Math.random()*255);
   let green = Math.floor(Math.random()*255);
   let blue = Math.floor(Math.random()*255);

   let color=`rgb(${red},${green},${blue})`;
   return color;

}

