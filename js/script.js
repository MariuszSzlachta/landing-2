var templateSlide = document.getElementById('template').innerHTML;
var carousel = document.querySelector('.main-carousel');

Mustache.parse(templateSlide);
var renderedTemplates = '';

for (var i = 0; i < data.length; i++) {
  renderedTemplates += Mustache.render(templateSlide, data[i]);
}
carousel.innerHTML = renderedTemplates;
var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    freeScroll: true,
    wrapAround: true
  });

  // hamburger
  var menu = document.querySelector('.main-nav');
  var hamburger = document.querySelector('.hamburger');
  var menuContainer = document.querySelector('nav .container');
  console.log(menuContainer);

  hamburger.addEventListener('click', function(){
    if (hamburger.classList.contains('close')){
      hamburger.classList.remove('close');
      menu.classList.remove('opened');
      menuContainer.classList.remove('colored');
    } else {
      hamburger.classList.add('close');
      menu.classList.add('opened');
      menuContainer.classList.add('colored');
    }
  });
