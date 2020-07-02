/*Ubicacion mapa*/
var mapa = new L.map('mi-mapa', {
    center: [-40, -58],
    zoom: 5    
});
/*Capas de fondo*/
var capaOSM = new L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png');
var capaRelieve = new L.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg');

capaOSM.addTo(mapa);
var capasBase = {
    "Relieve": capaRelieve,
    "OpenStreetMap": capaOSM
};

var selectorCapas = new L.control.layers(capasBase);
selectorCapas.addTo(mapa);
