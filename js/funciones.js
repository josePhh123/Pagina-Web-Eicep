
//ESCRITURA 

$(document).ready(function() {
    // Seleccionar los elementos que quieres animar
    var titles = $('.titulo');
  
    // Función para animar cada título
    function animateTitle(title) {
      // Obtener el texto completo del elemento
      var text = title.text();
  
      // Limpiar el contenido del elemento
      title.text('');
  
      // Definir la velocidad de animación
      var speed = 120;
  
      // Recorrer cada letra del texto y agregarla al elemento con un retraso
      for (var i = 0; i < text.length; i++) {
        setTimeout(function(i) {
          return function() {
            title.text(title.text() + text[i]);
          }
        }(i), speed * i);
      }
    }
  
    // Función para comprobar si un elemento está visible en la ventana
    function isElementVisible(element) {
      var windowHeight = $(window).height();
      var windowScrollTop = $(window).scrollTop();
      var elementOffsetTop = element.offset().top;
      var elementHeight = element.height();
  
      return (elementOffsetTop < (windowScrollTop + windowHeight) && (elementOffsetTop + elementHeight) > windowScrollTop);
    }
  
    // Función para comprobar si un título está visible y animarlo
    function animateVisibleTitle() {
      titles.each(function() {
        var title = $(this);
        if (isElementVisible(title) && !title.hasClass('animated')) {
          title.addClass('animated');
          animateTitle(title);
        }
      });
    }
  
    // Animar los títulos que son visibles en el momento de cargar la página
    animateVisibleTitle();
  
    // Animar los títulos que se hacen visibles al desplazarse por la página
    $(window).scroll(function() {
      animateVisibleTitle();
    });
  });