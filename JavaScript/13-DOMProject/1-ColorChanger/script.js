const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((button) => {
  button.addEventListener('click',function(eventObj){
    console.log(eventObj) //it will show which event object
    console.log(eventObj.target) //it will show target element
    if(eventObj.target.id === "grey"){
      body.style.backgroundColor = eventObj.target.id;
    }
    if(eventObj.target.id === "white"){
      body.style.backgroundColor = eventObj.target.id;
    }
    if(eventObj.target.id === "blue"){
      body.style.backgroundColor = eventObj.target.id;
    }
    if(eventObj.target.id === "yellow"){
      body.style.backgroundColor = eventObj.target.id;
    }
  })
});
