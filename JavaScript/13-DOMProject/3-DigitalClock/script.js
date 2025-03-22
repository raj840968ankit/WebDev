const clock = document.getElementById("clock")

//Now to execute without refreshing page at a particular interval
//syntax: setInterval(function,time in milliseconds)
setInterval(function(){
  let date = new Date();
  clock.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
}, 1000)