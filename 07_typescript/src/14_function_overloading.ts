

function add(x:number,y:number):number;//function declaration
function add(x:string,y:string):string;//function declaration
function add(x:number|string,y:number|string){
    if(typeof x==='number' && typeof y==='number'){
        return x+y;
    } else if(typeof x==='string' && typeof y==='string'){
        return x+" "+y;
    }
}


console.log(add(12,13));
console.log(add("Praveer","Pratap"));

export{}















