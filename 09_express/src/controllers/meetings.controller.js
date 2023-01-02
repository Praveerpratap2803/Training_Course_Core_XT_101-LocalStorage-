
const mongoose = require('mongoose')

const Meeting = mongoose.model('Meeting');

const getMeetings = async(req,res)=>{
    const date = req.date;
    let {from,to}=req.query;

    // very bad way to handle things! but works...
    if( from === undefined ) {
        from = '1900-01-01';
    }

    if( to === undefined ) {
        to = '3000-01-01';
    }

    try{
        const meetings = await Meeting.find({
            $and : [
                {
                    date:{
                        $gte:from
                    }
                },
                {
                    date:{
                        $lte:to
                    }
                }
            ]
        });
        res.json({
            meetings,
            date
        })
    }catch( error ) {
        res.status( 500 ).json({
            message: error.message
        });
    }
}

const getMeetingById = async ( req, res ) => {
    const { id } = req.params; // { id: '63105c5fd8eeefafe14a54f0' }

    try {
        const meeting = await Meeting.findById( id );
        res.json( meeting );
    } catch( error ) {
        res.status( 500 ).json({
            message: error.message
        });
    }
};

const postMeeting = async ( req, res ) => {
    const meeting = req.body;

    try {
        const updatedMeeting = await Meeting.create( meeting );
        res.status( 201 ).json( updatedMeeting );
    } catch( error ) {
        if( error.name === 'ValidationError' ) {
            // 400 -> BAD REQUEST (Client-side error)
            res.status( 400 ).json({
                message: error.message
            });
        } else {
            res.status( 500 ).json({
                message: error.message
            });
        }
    }
};

const updateMeetingById = async(req,res)=>{
    const {id}=req.params;
    const meetingPatch = req.body;

    try{
        const updatedMeeting = await Meeting.findByIdAndUpdate(id,meetingPatch,{
            new:true,
            runValidators:true
        });
        res.json(updatedMeeting);
    } catch(error){
        if(error.name === "ValidationError"){
            res.status(400).json({
                message:error.message
            })
        } else{
            res.status(500).json({
                message:error.message
            })
        }
    }

}

const deleteMeetingById = async(req,res)=>{
    const {id}=req.params;

    try{
        const meeting = await Meeting.findByIdAndDelete(id);

        if(!meeting){
            res.status(404).json({
                message:`Meeting with given ${id} does not exist `
            })
            return ;
        }
        res.status( 204 ).json();

    } catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    // getMeetings: getMeetings
    getMeetings,
    getMeetingById,
    postMeeting,
    updateMeetingById,
    deleteMeetingById
};










/*
const getMeetings=(req,res)=>{
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
}

module.exports = {
    getMeetings
};
*/




