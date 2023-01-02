//import '../check-login.js'
import {addWorkshop} from '../services/workshops'
import initNav from'../nav'

import Workshop from '../models/Workshop'
import '../../scss/pages/add-workshop.scss';

class AddWorkshop{
    addWorkshopForm : HTMLFormElement | null = null;
    
    isValid=()=>{
        return true;
    }

    addEventListeners=()=>{
        (this.addWorkshopForm as HTMLFormElement).addEventListener( 'submit', function( event ) {
            event.preventDefault();
            
            const nameEl = document.getElementById( 'name' ) as HTMLInputElement;
            const descriptionEl = document.getElementById( 'description' ) as  HTMLTextAreaElement;
            const startDateEl = document.getElementById( 'startDate' ) as HTMLInputElement;
            const endDateEl = document.getElementById( 'endDate' ) as HTMLInputElement;
        
            const data:Workshop = {
                name: nameEl.value.trim(),
                description: descriptionEl.value.trim(),
                startDate: startDateEl.value.trim(), // "yyyy-mm-dd"
                endDate: endDateEl.value.trim(),
                time: '11:30',
                category: 'frontend', // hard-coded here for demo
                location: {
                    address: 'xyz',
                    city: 'Bangalore',
                    state: 'Karnataka'
                },
                modes: {
                    online: true,
                    inPerson: true
                },
                imageUrl: 'https://somesite.com/someimage.png'
            };
        
            if( true ) {
                addWorkshop( data )
                    .then(
                        function( workshop :Workshop ) {
                            console.log( workshop );
                            window.location.href = './workshops-list.html';
                        }
                    )
                    .catch(
                        function( error ) {
                            alert( error.message );
                        }
                    )
        
            }
        })
    }

    load=()=>{
        this.addWorkshopForm = document.querySelector( '#add-workshop-form' ) as HTMLFormElement;
        this.addEventListeners();
        initNav();
    }
    
    
}

export default AddWorkshop;

