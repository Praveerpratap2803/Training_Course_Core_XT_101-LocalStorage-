var MeetingsApp = MeetingsApp || {};
MeetingsApp.Teams = (function() {
    const teamsUrl = 'https://mymeetingsapp.herokuapp.com/api/teams';
    
    const getTeams = () => {
        console.log( 'I will get teams' );
    };

    const addTeam = ( team ) => {
        console.log( `I will add a team called ${team}` );
    }

    return {
        getTeams: getTeams,
        addTeam: addTeam
    };
})();