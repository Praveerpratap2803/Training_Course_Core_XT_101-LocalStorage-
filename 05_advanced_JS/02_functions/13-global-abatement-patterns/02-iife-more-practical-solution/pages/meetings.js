// Problem: Many global variables
// Solution #2: Augmentation
(function() {
    const meetingsList = document.querySelector( '.meetings-list' );

    function searchFilterMeetings() {
        MeetingsApp.Meetings.getMeetings();
    }

    function addNewMeeting() {
        MeetingsApp.Meetings.addMeeting( 'XT-102 Project presentation' );
    }
    function removeMeeting(){
        MeetingsApp.Meetings.removeMeeting();
    }
    removeMeeting();
    searchFilterMeetings();
    addNewMeeting();
})();