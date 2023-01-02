
namespace MeetingsApp{
    export namespace Teams{
        const teamUrl = `https...`;
        export function getTeams(){
            console.log('get teams');
            console.log(teamUrl);
        }
    }
    export namespace Meetings{
        export function getMeetings(){
            console.log('getMeetings')
        }
    }
}

console.log(MeetingsApp)

MeetingsApp.Teams.getTeams();
MeetingsApp.Meetings.getMeetings();

export{}










