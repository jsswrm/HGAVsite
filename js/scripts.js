var selectedbutton = document.querySelector("#button");

selectedbutton.addEventListener("click", CLickAlert);

function CLickAlert()
{
    alert("button clicked!")
}
       
const map1 = L.map('map1').setView([52.527193, 5.434349], 15);

const backgroundMap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
    attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a>contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 19,
    
    }
  );
  
  backgroundMap.addTo(map1);

  const hash = new L.Hash(map1);

  var map = new maplibregl.Map({
    container: 'maplibre', // container id
    style: 'https://api.maptiler.com/maps/72f90690-1049-460a-8880-8967d62c3738/style.json?key=XdvXK2DRJHPZ6oW8ndUI', // style URL
    center: [5.434349, 52.527193], // starting position [lng, lat]
    zoom: 15, // starting zoom
    hash: true,
});

map.addControl(new maplibregl.FullscreenControl({container: document.querySelector('body')}));