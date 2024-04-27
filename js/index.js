import './custom-select.js'

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

const profileForm = document.querySelector('.profile__form');

if (profileForm) {
  profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const city = formData.get('city');
    const date = formData.get('date');
    const time = formData.get('time');
    const sex = formData.get('sex');
    console.log(name, city, date, time, sex)
  });
}

const compatibilityForm = document.querySelector('.compatibility__form');

if (compatibilityForm) {
  compatibilityForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const excellentSection = document.getElementById('excellent');
    mainSections.forEach((section) => section.classList.add('hidden'));
    if (excellentSection) excellentSection.classList.remove('hidden');
  });
}

const horoscopeForms = document.querySelectorAll('.horoscope__form');

horoscopeForms.forEach(horoscopeForm => {
  horoscopeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const excellentSection = document.getElementById('excellent');
    mainSections.forEach((section) => section.classList.add('hidden'));
    if (excellentSection) excellentSection.classList.remove('hidden');
  });
})
