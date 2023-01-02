import { logout } from "./services/auth";
var init = function () {
    var menuToggler = document.querySelector('.menu-toggler');
    var leftNav = document.querySelector('.left-nav');
    var logoutBtn = document.querySelector('#btn-logout');
    menuToggler.addEventListener('click', function () {
        leftNav.classList.toggle('d-sm-none');
    });
    logoutBtn.addEventListener('click', function () {
        logout();
        window.location.href = './login.html';
    });
};
export default init;
//# sourceMappingURL=nav.js.map