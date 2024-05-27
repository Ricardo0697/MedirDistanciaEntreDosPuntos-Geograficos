function calcularDistancia (lat1 ,lon1 , lat2, lon2){
   rad = function(x) {return x*Math.PI/180;}
  var R = 6378.137; //Radio de la tierra en km 
  var dLat = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * 
  Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  //aquí obtienes la distancia en metros por la conversion 1Km =1000m
  var d = R * c * 1000; 
  return d ; 
}
// nueva york
 
const lat1 = 40.7128;
const lon1 = -74.0060;
// los Angeles
const lat2 = 34.0522;
const lon2 = -118.2437;

const distancia = calcularDistancia(lat1,lon1, lat2,lon2);
console.log(`La distancia entre los dos puntos es de ${distancia.toFixed(2)} metros`)
