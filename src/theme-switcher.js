const checkBoxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const isSwitcherChecked = JSON.parse(localStorage.getItem('isChecked'));

const availableThemes = {
  light: 'light-theme',
  dark: 'dark-theme',
};

export default () => {
  checkBoxRef.addEventListener('change', ({ target }) => {
    if (target.checked === true) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  });
};

const setDarkTheme = () => {
  localStorage.setItem('isChecked', true);
  bodyRef.classList.add(availableThemes.dark);
  bodyRef.classList.remove(availableThemes.light);
};

const setLightTheme = () => {
  localStorage.setItem('isChecked', false);
  bodyRef.classList.add(availableThemes.light);
  bodyRef.classList.remove(availableThemes.dark);
};

if (isSwitcherChecked) {
  setDarkTheme();
  checkBoxRef.checked = true;
}
