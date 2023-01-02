import { logout } from "./services/auth";

const init = () => {
    const menuToggler = document.querySelector( '.menu-toggler' ) as HTMLElement;
    const leftNav = document.querySelector( '.left-nav' ) as HTMLElement;
    const logoutBtn = document.querySelector( '#btn-logout' ) as HTMLElement

    menuToggler.addEventListener( 'click', function() {
        leftNav.classList.toggle( 'd-sm-none' );
    });

    logoutBtn.addEventListener( 'click', function() {
        logout();

        window.location.href = './login.html';
    });
}

export default init;