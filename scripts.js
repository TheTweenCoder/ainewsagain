// JavaScript para elementos interativos
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.hero button');
  button.addEventListener('click', () => {
      alert('Bem-vindo ao futuro!');
  });
});

function navigateToPage2() {
  window.location.href = 'page2.html';
}
