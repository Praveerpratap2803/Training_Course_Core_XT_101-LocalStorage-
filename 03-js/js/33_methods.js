const Praveer = {
    "fname" : 'Praveer',
    "age":21,
    emails:[
        'pra.gmail.com',
        'p.gmail.com'
    ],
    address:{
        city:'pune',
        pinCode:411023
    },
    
    celebrateBirthday: function(){
        this.age++;
    },
    //shorter syntax introduced in ES2015
    changeAddress(newCity,newPinCode){
        this.address.city=newCity;
        this.address.pinCode=newPinCode;
    }
}

Praveer.celebrateBirthday();
Praveer.changeAddress('Mum',100010)
console.log(Praveer)
