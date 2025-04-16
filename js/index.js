const images = {
  'card-club': [
    './img/pisces.png',
    './img/pisces-2.png',
  ],
  'card-yes': [
    './img/yess.png',
  ],
  'card-heres': [
    './img/heresunsella.png',
    './img/heresunsella-2.png',
    './img/heresunsella-3.png'
  ]
};

document.querySelectorAll('.card').forEach(card => {
  const cardClass = card.classList[1]; // Получаем класс конкретной карточки (например, card-club)
  const imageElement = card.querySelector('.card__image');
  const bullets = card.querySelectorAll('.bullet');
  let currentImageIndex = 0;

  function updateImage() {
    imageElement.src = images[cardClass][currentImageIndex];
    bullets.forEach((bullet, index) => {
      bullet.classList.remove('active');
      if (index === currentImageIndex) {
        bullet.classList.add('active');
      }
    });
  }

  // Обработчик клика по изображению (для пролистывания)
  card.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images[cardClass].length;
    updateImage();
  });

  // Обработчик клика по буллетам
  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', function() {
      currentImageIndex = index;
      updateImage();
    });
  });

  // Инициализация первой картинки и состояния буллетов
  updateImage();
});
