// Problem: Many global variables
// Solution #2: Augmentation
(function() {
    const teamsList = document.querySelector( '.teams-list' );

    

    function addNewCalender() {
        MeetingsApp.calender.addCalender( '23-08-2022' );
    }

    
    addNewCalender();
})();


