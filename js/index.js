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

const referralLinkText = document.querySelector('.referral__main-link-text');
const referralLinkButton = document.querySelector('.referral__main-link-button');

if (referralLinkButton && referralLinkText) {
  referralLinkButton.addEventListener('click', () => {
    navigator.clipboard.writeText(referralLinkText.innerText);
  });
}
