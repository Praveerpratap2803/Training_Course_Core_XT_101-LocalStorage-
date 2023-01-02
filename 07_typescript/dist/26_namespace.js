"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MeetingsApp;
(function (MeetingsApp) {
    var Teams;
    (function (Teams) {
        var teamUrl = "https...";
        function getTeams() {
            console.log('get teams');
            console.log(teamUrl);
        }
        Teams.getTeams = getTeams;
    })(Teams = MeetingsApp.Teams || (MeetingsApp.Teams = {}));
    var Meetings;
    (function (Meetings) {
        function getMeetings() {
            console.log('getMeetings');
        }
        Meetings.getMeetings = getMeetings;
    })(Meetings = MeetingsApp.Meetings || (MeetingsApp.Meetings = {}));
})(MeetingsApp || (MeetingsApp = {}));
console.log(MeetingsApp);
MeetingsApp.Teams.getTeams();
MeetingsApp.Meetings.getMeetings();
