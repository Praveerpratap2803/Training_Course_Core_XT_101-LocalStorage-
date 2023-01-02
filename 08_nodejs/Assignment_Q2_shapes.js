/*
2. Create a module shapes.js to calculate areas of various shapes.
 - square (public function) - makes use of Rectangle function to calculate area
 - rectangle (private function)
 - circle (public function)
 - PI (private variable)
 Make use of this module in another module (i.e. file)
*/
const shapes = (function area(){
        const PI = 3.14;
        function rectangle(length,breadth){
            return length*breadth;
        }
        const shapes = {
            square(length,breadth){
                if(length===breadth)
                    return rectangle(length,breadth)
            },
            circle(radius){
                return PI * radius *radius;
            }
        }
        return shapes;
    }
)();

console.log(shapes.square(10,11))
console.log(shapes.circle(5))

















