//import '../check-login.js'
import {
    getWorkshops,
    deleteWorkshop
} from '../services/workshops'
import initNav from '../nav'
import Workshop from '../models/Workshop';
import '../../scss/pages/workshops-list.scss'

class WorkshopsList{
    allWorkshops = [] as Workshop[]; // or null
    
    // let us set up for filtering the workshops when use types in search box
    searchEl : HTMLInputElement | null = null;
    infoMessage : HTMLElement | null = null;
    
    showLoadingMessage=()=>{
        (this.infoMessage as HTMLElement).textContent = 'Loading workshops...Please wait...';
        (this.infoMessage as HTMLElement).classList.remove('hide');
    }

    // pass on workshops to show, and this function will show it on the page
    showWorkshops=(workshops : Workshop[])=>{
        const workshopsList = document.querySelector('.workshops-list') as HTMLElement;

        let workshopsListStr = '';

        workshops.forEach(function (workshop:Workshop) {
            // console.log( workshop.name, workshop.category, workshop.location.city );

            // workshopsListStr = workshopsListStr + `
            workshopsListStr += `
                <div class="workshop p-3" data-workshopid="${workshop.id}">
                    <img src="${workshop.imageUrl}" alt="${workshop.name}" class="img-fluid" />
                    <h2 class="workshop-title">
                        ${workshop.name}
                    </h2>
                    <div class="workshop-duration">
                        ${workshop.startDate} - ${workshop.endDate}
                    </div>
                    <div class="workshop-time">
                        ${workshop.time}
                    </div>
                    <button class="btn-delete">Delete workshop</button>
                </div>
            `;
        });

        workshopsList.innerHTML = workshopsListStr;

        this.addWorkshopCardListeners(); // we should set up listeners only now (since workshops get added not on page load but after a delay)
    }

    addWorkshopCardListeners=()=>{
        const buttons = document.querySelectorAll( '.btn-delete' );

        console.log( buttons );

        buttons.forEach(
            function( button ) {
                button.addEventListener( 'click', function() {
                    const workshop = button.closest( '.workshop' ) as HTMLElement;
                    const workshopId = workshop.getAttribute( 'data-workshopid' ) as string;
                    console.log( workshopId );

                    deleteWorkshop( workshopId )
                        .then(
                            function( response ) {
                                workshop.remove();
                            }
                        )
                        .catch(
                            function( error ) {
                                alert( error.message );
                            }
                        )
                });
            }
        )
    };

    fetchWorkshops=async()=>{
        // returns a "Promise object"
        // 2 methods of promise object - then / catch
        // the promise will reject if...
        // The network is down
        // The server is down
        return getWorkshops()
            .then((workshops:Workshop[])=>{
                this.allWorkshops = workshops;
                return workshops;
                // this.showWorkshops( workshops );
            })
            .then(this.showWorkshops)
            .catch((error)=>{
                const errorMessage = document.querySelector('.message-error')as HTMLElement;
                errorMessage.textContent = error.message;
                errorMessage.classList.remove('hide');
            })
            .finally(()=>{
                (this.infoMessage as HTMLElement).textContent = '';
                (this.infoMessage as HTMLElement).classList.add('hide');
            });
    }

    addEventListeners=()=>{
        (this.searchEl as HTMLInputElement).addEventListener('input', (event) => {
            const search = (this.searchEl as HTMLInputElement).value;

            // let us find the list of workshops that have the search key in their name
            const matchedWorkshops = this.allWorkshops.filter(function (workshop) {
                // return true if the workshop's name has the search string in it
                return workshop.name.toLowerCase().includes(search.toLowerCase());
            });

            this.showWorkshops(matchedWorkshops);
        });
    }

    load=async()=>{
        // let us set up for filtering the workshops when use types in search box
        this.searchEl = document.querySelector('#search-workshops');
        this.infoMessage = document.querySelector('.message-info');

        this.showLoadingMessage();
        await this.fetchWorkshops();
        this.addEventListeners();
        initNav();
    }
    
    
}


export default WorkshopsList;
