var addWorkshopForm = document.querySelector('#add-workshop-form');
function isValid() {
    return true;
}
function showWorkshop(workshop) {
    var newWorkshopEl = document.getElementById('new-workshop');
    newWorkshopEl.innerHTML = "\n        <div>".concat(workshop.name, "</div>\n        <div>").concat(workshop.description, "</div>\n        <div>").concat(workshop.startDate, "</div>\n        <div>").concat(workshop.endDate, "</div>\n    ");
}
addWorkshopForm.addEventListener('submit', function (event) {
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
    };
    // converts a JS object/array into a JSON-formatted string
    var body = JSON.stringify(data);
    console.log(body);
    if (isValid()) {
        // we will submit the data through Ajax
        fetch("https://workshops-server.herokuapp.com/workshops", {
            method: 'POST',
            body: body,
            headers: {
                // Authorization: "sdkbkjwbejwbveiwbviwb"
                'Content-Type': 'application/json',
            },
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (workshop) {
            console.log(workshop);
            showWorkshop(workshop);
        })
            .catch(function (error) {
            alert(error.message);
        });
    }
});
export {};
