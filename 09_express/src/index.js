require('./data/init')
const fs = require('fs')
const path = require('path');
const morgan = require('morgan');

const express = require('express')
const pagesRouter = require('./routes/pages.routes.js')
const userRouter = require('./routes/users.route.js')
const teamRouter = require('./routes/teams.route.js')
const meetingRouter = require('./routes/meetings.route')
const app = express();

app.set('view engine','ejs');

const accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flag:'a'})
app.use(morgan('combined',{stream:accessLogStream}))
app.use((req,res,next)=>{
    req.date=new Date();
    console.log('Middleware 1');
    next();
})


app.use(express.json())

app.use('/api/users',userRouter)
app.use('/api/teams',teamRouter)
app.use('/api/meetings',meetingRouter)
app.use(pagesRouter);
/*
app.get('/api/teams',(req,res)=>{
    // res.write('Teams API under construction .Try again later')
    // res.end();
        // write(), end() and sets 'Content-Type' in response headers to 'text/html'

    res.send('API under construction. Try again later.')
})
app.get('/api/meetings',(req,res)=>{
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
            date: '01-09-2022',
            attendees: [
                'mark.smith@example.com',
                'jane.doe@example.com'
            ]
        }
    ])
})
*/
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('server started')
})





