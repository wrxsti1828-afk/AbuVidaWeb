document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Gracias por contactarte con Abuvida 💡");
  this.reset();
});
