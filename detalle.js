
var consumo = fetch("https://digimon-api.vercel.app/api/digimon");
var detalle = document.getElementById("detalle");
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

    if (name == datos[i].name) {
      html = '<a' + datos[i].name + '"     class="deta">' +
        '<img src="' + datos[i].img + '" />' +
        '<h2>' + datos[i].name + '</h2>' +
        '<span>' + datos[i].level + '</span>' +
        '</section>';
    }
  }
  // inserta todo el html a mostrarse
  detalle.innerHTML = html;

});
