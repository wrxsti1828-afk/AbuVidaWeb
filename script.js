document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    Swal.fire({
      title: '¡Gracias por contactarte con Abuvida! 💙',
      text: 'Nos alegra saber de ti. Pronto responderemos tu mensaje.',
      icon: 'success',
      confirmButtonColor: '#0077b6',
      confirmButtonText: 'Cerrar'
    });

    form.reset();
  });
});
