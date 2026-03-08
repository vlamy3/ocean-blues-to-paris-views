const tripDate = new Date("Feb 2 2026").getTime()

setInterval(function(){

let now = new Date().getTime()

let distance = tripDate - now

let days = Math.floor(distance / (1000*60*60*24))

document.getElementById("timer").innerHTML =
days + " days until departure"

},1000)