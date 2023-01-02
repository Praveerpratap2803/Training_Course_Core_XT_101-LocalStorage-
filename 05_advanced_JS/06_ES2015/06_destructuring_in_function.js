const emails = [
    {
        type:'personal',
        value:"john@gmail.com"
    },
    {
        type: 'official',
        value:"john@sapient.com"
    }
];

const addEmail = ({type,value})=>{
    console.log(type,value);
    emails.push({
        type:type,
        value:value
    })
};

addEmail({
    type:'official',
    value:'john@outlook.com'
})
console.log(emails);

