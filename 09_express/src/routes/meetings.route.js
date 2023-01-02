
const express = require('express');
const {getMeetings,getMeetingById,postMeeting, updateMeetingById,deleteMeetingById}=require('../controllers/meetings.controller');
const router = express.Router();

router.get('',getMeetings);
router.get( '/:id', getMeetingById );

router.post('',postMeeting);

router.patch('/:id',updateMeetingById)
router.delete( '/:id', deleteMeetingById );
module.exports = router;



/*
router.get('',(req,res)=>{
    res.json([
        {
            name: 'Google marketing campaign',
            date: '31-08-2022',
            attendees: [
                'john.doe@example.com',
                'jane.doe@example.com'
            ]
        },
        {
            name: 'Facebook marketing campaign',
            date: '01-04-2022',
            attendees: [
                'mark.smith@example.com',
                'jane.doe@example.com'
            ]
        }
    ])
})

module.exports = router;
*/






