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

    return {
        getMeetings: getMeetings,
        addMeeting: addMeeting
    };
})()
);


