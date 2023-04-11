var url = new URLSearchParams(window.location.search);
var params = Object.fromEntries(url.entries());
var digimon = params["name"];

console.log(digimon);