// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', documentActions);

    function documentActions(e) {
        const targetEl = e.target;
        if (window.innerWidth < 479.98) {
            if (targetEl.classList.contains('menu__icon')) {
                targetEl.closest('.header__menu').classList.toggle('_open');
            }

            if (!targetEl.closest('.menu__icon')) {
                _removeClasses(document.querySelectorAll('.header__menu._open'), '_open');
                _removeClasses(document.querySelectorAll('.menu-open'), 'menu-open');
                _removeClasses(document.querySelectorAll('.lock'), 'lock');
            }

        }
    }
    window.addEventListener('resize', function () {
        if (window.innerWidth > 479.98) {
            _removeClasses(document.querySelectorAll('.header__menu._open'), '_open');
            _removeClasses(document.querySelectorAll('.menu-open'), 'menu-open');
        }
    });
});

//RemoveClasses
function _removeClasses(el, class_name) {
    for (let i = 0; i < el.length; i++) {
        el[i].classList.remove(class_name);
    }
}