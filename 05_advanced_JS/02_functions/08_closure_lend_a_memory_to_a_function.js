
function makeAjax(endpoint){
    function ajax(){
        console.log(`https://mymeetingsapp.herokuapp.com/${endpoint}`)
    }

    return ajax;
}

const teamsAjax = makeAjax( 'api/v1/teams' ); // teamsAjax refers to endpoint_a = 'api/v1/teams'
const meetingsAjax = makeAjax( 'api/v1/meetings' ); // meetingsAjax refers to endpoint_b = 'api/v1/meetings'

teamsAjax();
teamsAjax();
teamsAjax();

meetingsAjax();
meetingsAjax();
meetingsAjax();
meetingsAjax();












