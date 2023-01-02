import {login} from '../services/auth'
import '../../scss/pages/login.scss';

class Login{
    loginForm : HTMLFormElement | null=null;

    addEventListeners=()=>{
        (this.loginForm as HTMLFormElement).addEventListener( 'submit', function( event ) {
            event.preventDefault();

            // please do validations
            // ...

            // extract the email and password and form a credentials object
            const credentials = {
                email: (document.getElementById( 'email' ) as HTMLInputElement).value.trim(),
                password: (document.getElementById( 'password' ) as HTMLInputElement).value.trim(),
            };

            // if everything is valid
            login( credentials )
                .then(
                    function( loginResponse ) {
                        console.log( loginResponse );
                        window.location.href = './workshops-list.html';
                    }
                )
                .catch(
                    function( error ) {
                        alert( error.message );
                    }
                );
        });
    }

    load=()=>{
        this.loginForm = document.getElementById( 'login-form' ) as HTMLFormElement;
        
        this.addEventListeners();
    }
}

export default Login;
