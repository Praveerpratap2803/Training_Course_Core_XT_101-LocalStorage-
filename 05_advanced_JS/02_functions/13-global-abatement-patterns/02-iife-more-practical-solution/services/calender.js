var MeetingsApp = MeetingsApp || {};


MeetingsApp.Meetings = MeetingsApp.Meetings || {};
Object.assign(MeetingsApp.Meetings,(function() {
    const meetingsUrl = 'https://mymeetingsapp.herokuapp.com/api/meetings';
    
    const getMeetings = () => {
        console.log( 'I will get meetings' );
    };

    const addMeeting = ( meeting ) => {
        console.log( `I will add a meeting called ${meeting}` );
    }
    const removeMeeting = () =>{
        console.log('I can remove');
    }
    return {
        getMeetings: getMeetings,
        addMeeting: addMeeting,
        removeMeeting:removeMeeting
    };
})())


MeetingsApp.calender = (function() {
    //const teamsUrl = 'https://mymeetingsapp.herokuapp.com/api/teams';
    
    

    const addCalender = ( cal ) => {
        console.log( `I will add a date called ${cal}` );
    }

    return {
        
        addCalender : addCalender
        
    };
})();