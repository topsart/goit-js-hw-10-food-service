import menu from './menu.json';
import menuTemplate from './templates/menu-item.hbs';

export default () => {
  const listRef = document.querySelector('.menu');

  menu.map(item => {
    const html = menuTemplate(item);
    listRef.insertAdjacentHTML('beforeend', html);
  });
};
