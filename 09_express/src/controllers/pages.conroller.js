
const { throws } = require('assert');
const mongoose = require('mongoose')

const Meeting = mongoose.model('Meeting');

const showMeetings = async(req,res)=>{
    try{
        //throw new Error("Some thing is wrong")

        const meetings = await Meeting.find();   
        res.render('meetings',{
            title:'List of meeting',
            meetings,
            error:null
        })
    }catch(error){
        res.render('meetings',{
            title:'List of meeting',
            error,
            meetings:null
        })
    }
}

module.exports = {
    showMeetings
}







