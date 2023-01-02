//import '../check-login.js'
import { getWorkshops, deleteWorkshop } from '../services/workshops';
import initNav from '../nav';
import '../../scss/pages/workshops-list.scss';
var WorkshopsList = /** @class */ (function () {
    function WorkshopsList() {
        var _this = this;
        this.allWorkshops = []; // or null
        // let us set up for filtering the workshops when use types in search box
        this.searchEl = null;
        this.infoMessage = null;
        this.showLoadingMessage = function () {
            _this.infoMessage.textContent = 'Loading workshops...Please wait...';
            _this.infoMessage.classList.remove('hide');
        };
        // pass on workshops to show, and this function will show it on the page
        this.showWorkshops = function (workshops) {
            var workshopsList = document.querySelector('.workshops-list');
            var workshopsListStr = '';
            workshops.forEach(function (workshop) {
                // console.log( workshop.name, workshop.category, workshop.location.city );
                // workshopsListStr = workshopsListStr + `
                workshopsListStr += "\n                <div class=\"workshop p-3\" data-workshopid=\"".concat(workshop.id, "\">\n                    <img src=\"").concat(workshop.imageUrl, "\" alt=\"").concat(workshop.name, "\" class=\"img-fluid\" />\n                    <h2 class=\"workshop-title\">\n                        ").concat(workshop.name, "\n                    </h2>\n                    <div class=\"workshop-duration\">\n                        ").concat(workshop.startDate, " - ").concat(workshop.endDate, "\n                    </div>\n                    <div class=\"workshop-time\">\n                        ").concat(workshop.time, "\n                    </div>\n                    <button class=\"btn-delete\">Delete workshop</button>\n                </div>\n            ");
            });
            workshopsList.innerHTML = workshopsListStr;
            _this.addWorkshopCardListeners(); // we should set up listeners only now (since workshops get added not on page load but after a delay)
        };
        this.addWorkshopCardListeners = function () {
            var buttons = document.querySelectorAll('.btn-delete');
            console.log(buttons);
            buttons.forEach(function (button) {
                button.addEventListener('click', function () {
                    var workshop = button.closest('.workshop');
                    var workshopId = workshop.getAttribute('data-workshopid');
                    console.log(workshopId);
                    deleteWorkshop(workshopId)
                        .then(function (response) {
                        workshop.remove();
                    })
                        .catch(function (error) {
                        alert(error.message);
                    });
                });
            });
        };
        this.fetchWorkshops = function () {
            // returns a "Promise object"
            // 2 methods of promise object - then / catch
            // the promise will reject if...
            // The network is down
            // The server is down
            getWorkshops()
                .then(function (workshops) {
                _this.allWorkshops = workshops;
                return workshops;
                // this.showWorkshops( workshops );
            })
                .then(_this.showWorkshops)
                .catch(function (error) {
                var errorMessage = document.querySelector('.message-error');
                errorMessage.textContent = error.message;
                errorMessage.classList.remove('hide');
            })
                .finally(function () {
                _this.infoMessage.textContent = '';
                _this.infoMessage.classList.add('hide');
            });
        };
        this.addEventListeners = function () {
            _this.searchEl.addEventListener('input', function (event) {
                var search = _this.searchEl.value;
                // let us find the list of workshops that have the search key in their name
                var matchedWorkshops = _this.allWorkshops.filter(function (workshop) {
                    // return true if the workshop's name has the search string in it
                    return workshop.name.toLowerCase().includes(search.toLowerCase());
                });
                _this.showWorkshops(matchedWorkshops);
            });
        };
        this.load = function () {
            // let us set up for filtering the workshops when use types in search box
            _this.searchEl = document.querySelector('#search-workshops');
            _this.infoMessage = document.querySelector('.message-info');
            _this.showLoadingMessage();
            _this.fetchWorkshops();
            _this.addEventListeners();
            initNav();
        };
    }
    return WorkshopsList;
}());
export default WorkshopsList;
//# sourceMappingURL=workshops-list.js.map