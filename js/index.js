const navButtons = document.querySelectorAll('.nav-button');
const mainSections = document.querySelectorAll('.main section');

navButtons.forEach((navButton) => {
  navButton.addEventListener('click', (event) => {
    const targetId = event.currentTarget.dataset.target;
    const targetSection = [...mainSections].find((section) => section.id === targetId);
    if (targetSection) {
      mainSections.forEach((section) => section.classList.add('hidden'));
      targetSection.classList.remove('hidden');
    }
  });
});
