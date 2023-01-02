//import '../check-login.js'
import { addWorkshop } from '../services/workshops';
import initNav from '../nav';
import '../../scss/pages/add-workshop.scss';
var AddWorkshop = /** @class */ (function () {
    function AddWorkshop() {
        var _this = this;
        this.addWorkshopForm = null;
        this.isValid = function () {
            return true;
        };
        this.addEventListeners = function () {
            _this.addWorkshopForm.addEventListener('submit', function (event) {
                event.preventDefault();
                var nameEl = document.getElementById('name');
                var descriptionEl = document.getElementById('description');
                var startDateEl = document.getElementById('startDate');
                var endDateEl = document.getElementById('endDate');
                var data = {
                    name: nameEl.value.trim(),
                    description: descriptionEl.value.trim(),
                    startDate: startDateEl.value.trim(),
                    endDate: endDateEl.value.trim(),
                    time: '11:30',
                    category: 'frontend',
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
                if (this.isValid()) {
                    addWorkshop(data)
                        .then(function (workshop) {
                        console.log(workshop);
                        window.location.href = './workshops-list.html';
                    })
                        .catch(function (error) {
                        alert(error.message);
                    });
                }
            });
        };
        this.load = function () {
            _this.addWorkshopForm = document.querySelector('#add-workshop-form');
            _this.addEventListeners();
            initNav();
        };
    }
    return AddWorkshop;
}());
export default AddWorkshop;
//# sourceMappingURL=add-workshop.js.map