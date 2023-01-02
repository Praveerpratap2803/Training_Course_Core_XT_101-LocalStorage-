// credentials = { email: 'john.doe@example.com', password: 'Password123#' }
//import { config } from 'process';
import Config from '../config'
import Credentials from '../models/Credentials';
const {apiBaseUrl}=Config;
function login( credentials : Credentials ) {
    return fetch(
        `${apiBaseUrl}/login`,
        {
            method: 'POST', // better to use ALL CAPS for the method
            body: JSON.stringify( credentials ),
            headers: {
                // Authorization: "sdkbkjwbejwbveiwbviwb"
                "Content-Type": "application/json"
            }
        }
    )
        .then(
            function( response ) {
                if (!response.ok) {
                    // for 404 kind of errors, we should check and explcitly throw an error
                    throw new Error(response.statusText);
                }

                return response.json();
            }
        )
        .then(
            function( loginResponse ) {
                // store the details in localStorage
                localStorage.setItem( 'email', loginResponse.email );
                localStorage.setItem( 'token', loginResponse.authToken );
                localStorage.setItem( 'role', loginResponse.role );

                return loginResponse;
            }
        )
}

function getToken() {
    return localStorage.getItem( 'token' );
}

function logout() {
    localStorage.clear();
}

export{
    login,
    getToken,
    logout
}

