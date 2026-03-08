var map = L.map('map').setView([30,-30],3)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 6,
}).addTo(map)

var route = [
[25.7617,-80.1918],   // Miami
[18.427,-64.618],     // Tortola
[28.4636,-16.2518],   // Tenerife
[41.3851,2.1734],     // Barcelona
[43.5528,7.0174],     // Cannes
[43.7276,7.3614],     // Eze
[48.8566,2.3522],     // Paris
[38.7223,-9.1393]     // Lisbon
]

L.polyline(route, {color:'blue', weight:4}).addTo(map)

route.forEach(function(point){

L.marker(point).addTo(map)

})