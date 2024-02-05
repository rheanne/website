
//NAVBAR JS
function myFunction(x) {
    x.classList.toggle("change");    
    
  }

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("topBody").style.marginLeft = "250px";
    

  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {    
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("topBody").style.marginLeft = "0";

  } 


//BODY
var i = 0;
var txt = "Hi my name is Rheanne Alibudbud." + "\n" +  " I am a first year Computer Studies and Information Systems student at Douglas College.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("p1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
