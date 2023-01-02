// Problem: Many global variables
// Solution #1: Put your code in an IIFE
// IIFE is one of the _global "abatement"_ patterns - aim to reduce the number of global variables
(function() {
    const teamsList = document.querySelector( '.teams-list' );

    function showTeams() {
        getTeams()
    }

    showTeams();
})();