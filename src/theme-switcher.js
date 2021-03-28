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

const bodyAddClass = (classToAdd, classToRemove) => {
  bodyRef.classList.add(classToAdd);
  bodyRef.classList.remove(classToRemove);
};

const setDarkTheme = () => {
  localStorage.setItem('isChecked', true);
  bodyAddClass(availableThemes.dark, availableThemes.light);
};

const setLightTheme = () => {
  localStorage.setItem('isChecked', false);
  bodyAddClass(availableThemes.light, availableThemes.dark);
};

if (isSwitcherChecked) {
  setDarkTheme();
  checkBoxRef.checked = true;
}
