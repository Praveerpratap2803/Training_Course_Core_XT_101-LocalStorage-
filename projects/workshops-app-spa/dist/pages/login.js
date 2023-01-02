import { login } from '../services/auth';
import '../../scss/pages/login.scss';
var Login = /** @class */ (function () {
    function Login() {
        var _this = this;
        this.loginForm = null;
        this.addEventListeners = function () {
            _this.loginForm.addEventListener('submit', function (event) {
                event.preventDefault();
                // please do validations
                // ...
                // extract the email and password and form a credentials object
                var credentials = {
                    email: document.getElementById('email').value.trim(),
                    password: document.getElementById('password').value.trim(),
                };
                // if everything is valid
                login(credentials)
                    .then(function (loginResponse) {
                    console.log(loginResponse);
                    window.location.href = './workshops-list.html';
                })
                    .catch(function (error) {
                    alert(error.message);
                });
            });
        };
        this.load = function () {
            _this.loginForm = document.getElementById('login-form');
            _this.addEventListeners();
        };
    }
    return Login;
}());
export default Login;
//# sourceMappingURL=login.js.map