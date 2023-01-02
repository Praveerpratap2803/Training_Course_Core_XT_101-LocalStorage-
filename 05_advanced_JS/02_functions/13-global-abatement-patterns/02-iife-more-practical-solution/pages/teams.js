// Problem: Many global variables
// Solution #2: Augmentation
(function() {
    const teamsList = document.querySelector( '.teams-list' );

    function showTeams() {
        MeetingsApp.Teams.getTeams();
    }

    function addNewTeam() {
        MeetingsApp.Teams.addTeam( 'Sapient July React' );
    }

    showTeams();
    addNewTeam();
})();