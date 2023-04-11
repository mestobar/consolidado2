var consumo = fetch("https://digimon-api.vercel.app/api/digimon");
var digimons = document.getElementById("digimons");
const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var name = urlParams.get('name');
 
//prueba


consumo.then(function(respuesta) {
  return respuesta.json();
}).then(function(datos) {
  datos = datos.sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
  });
  var html = "";
  for (var i = 0; datos.length > i; i++) {


    html = html + '<a href="/detalle.html?name=' + datos[i].name + '"     class="digi">' +
      '<img src="' + datos[i].img + '" />' +
      '<h2>' + datos[i].name + '</h2>' +
      '<span>' + datos[i].level + '</span>' +
      '</section>';

  
}

  digimons.innerHTML = html;

});

