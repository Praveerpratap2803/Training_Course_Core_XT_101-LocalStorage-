

const hotels = new Map()

const bengaluruWhiteField = {
    name:'Bengaluru',
    state:'Karnataka',
    location:'Whitefield'
};

const bengaluruBellandur = {
    name:'Bengaluru',
    state:'Karnataka',
    location:'Whitefield'
};

//hotels.set(bengaluruWhiteField,hotels)
hotels.set('Noida',['Hotel C','Hotel D','Hotal E'])
hotels.set('Gurugram',['Hotel f','Hotel g','Hotal h'])
hotels.set('Mumbai',['Hotel i','Hotel j','Hotal k'])

console.log(hotels.get('Noida'))

hotels.forEach(
    (hotelLocation,key)=>{
        console.log('Location :',key)
        console.log('Hotels :',hotelLocation)
        hotelLocation.forEach(hotelCity=>console.log(hotelCity))
    }


)
















