

const name = 'Google marketing'
const startDate = '2022-08-31';
const meetingDescription = 'Ads on Google search for product launch';
const END_DATE = 'endDate'


const meeting ={
    name,
    startDate,
    [END_DATE]:'2022-08-31',
    description : meetingDescription
}

console.log(meeting)
const addMeeting = ( meetingObj ) => {
    // Ajax call goes out here...
}

addMeeting( meeting );










