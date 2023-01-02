
type FillColor = 'red'|'green'|'blue'|'black';


interface Shape {
    
    color:FillColor;
    area:()=>number,
    perimeter:()=>number
}

class Rectangle implements Shape{
    color:FillColor;
    l:number;
    b:number;
    constructor(l:number,b:number,color:FillColor){
        this.l=l;
        this.b=b;
        this.color=color;
    }
    area(){
        return this.l * this.b;
    }
    perimeter(){
        return 2*(this.l+this.b)
    };
}

class Circle implements Shape{
    color: FillColor;
    r:number;
    constructor(r:number,color:FillColor){
        this.r = r;
        this.color=color;
    }
    area(){
        return Math.PI*this.r **2;
    }
    perimeter(){
        return 2*Math.PI*this.r ;
    }
}


const monitor = new Rectangle(12,9,'black')
console.log(monitor.area());

const pizza = new Circle(8,'black');
console.log(pizza.area())

export{};











