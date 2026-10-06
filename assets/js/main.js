// MENÚ MOBILE
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.menu ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// DARK / LIGHT MODE
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');

  const icon = document.getElementById('toggle-icon');
  icon.src = icon.src.includes('sol')
    ? 'assets/img/luna.webp'
    : 'assets/img/sol.png';
});

// EMAIL DINÁMICO (anti bots)
document.addEventListener("DOMContentLoaded", () => {
  const user = "juanmelguizogm";
  const domain = "gmail.com";
  document.getElementById("email").innerHTML =
    `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
});

// EDUCATION CARDS FLIP
document.querySelectorAll(".education-card").forEach(card => {
  card.addEventListener("click", () => {
    document
      .querySelectorAll(".education-card")
      .forEach(c => c !== card && c.classList.remove("flipped"));
    card.classList.toggle("flipped");
  });
});