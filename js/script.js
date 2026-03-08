const hamburger = document.getElementById("hamburger")
const navLinks = document.getElementById("navLinks")

hamburger.addEventListener("click", function(){

if(navLinks.style.display === "flex"){
navLinks.style.display = "none"
} else {
navLinks.style.display = "flex"
}

})

// initialize map centered between US and Europe
var map = L.map('map').setView([35, -30], 3);

// map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; OpenStreetMap'
}).addTo(map);

// trip locations
var stops = [
{ name:"Miami", coords:[25.7617,-80.1918] },
{ name:"Tortola", coords:[18.4207,-64.6399] },
{ name:"Tenerife", coords:[28.2916,-16.6291] },
{ name:"Barcelona", coords:[41.3851,2.1734] },
{ name:"Cannes", coords:[43.5528,7.0174] },
{ name:"Èze", coords:[43.7278,7.3614] },
{ name:"Paris", coords:[48.8566,2.3522] },
{ name:"Lisbon", coords:[38.7223,-9.1393] }
];

// add markers
stops.forEach(function(stop){
L.marker(stop.coords)
.addTo(map)
.bindPopup("<b>"+stop.name+"</b>");
});

// draw route
var route = stops.map(stop => stop.coords);

L.polyline(route,{
color:"#ff4d6d",
weight:4,
dashArray:"8,8"
}).addTo(map);