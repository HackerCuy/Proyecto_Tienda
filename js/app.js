window.onload = function () {
  const modalImagen = document.getElementById("modal-imagen");
  const button = document.getElementById("ham-button");
  const nav = document.getElementById("ham-list");

  button.addEventListener('click', () => {
    alert('click');
    nav.classList.toggle('show');
  });

  if (modalImagen) {
    modalImagen.addEventListener('show.bs.modal', function (event) {
      const enlace = event.relatedTarget;
      const rutaImagen = enlace.getAttribute('data-bs-imagen');

      // Construir la imagen
      const imagen = document.createElement('IMG');
      imagen.src = `img/${rutaImagen}.jpg`;
      imagen.classList.add('img-fluid');
      imagen.alt = 'Imagen Galería';

      const contenidoModal = document.querySelector('.modal-body');
      contenidoModal.appendChild(imagen);
    });

    modalImagen.addEventListener('hidden.bs.modal', function () {
      const contenidoModal = document.querySelector('.modal-body');
      contenidoModal.textContent = '';
    });
  }



  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })();

}
