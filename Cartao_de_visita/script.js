const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0 0 20px rgba(56,189,248,0.5)';
  });

  card.addEventListener('mouseout', () => {
    card.style.boxShadow = 'none';
  });
});