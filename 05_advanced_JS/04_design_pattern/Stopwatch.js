
class Stopwatch {

    constructor(){
        this.timeElapsed = 0;
        this.intervalId = -1;
        this.callbacks ={
            tick:[],
            stop:[]
        };
    }
    addListener(event,cb){
        this.callbacks[event]?.push(cb);
    }

    runListeners(event){
        //console.log(this);
        
                this.callbacks[event].forEach(
                    (f)=>{
                        f(this.timeElapsed);
                    }
                )
            
            
        
    }
    start(){
        this.intervalId = setInterval(
            ()=>{
                this.timeElapsed++;
                this.runListeners('tick');
            },1000
        )
    }
    stop(){
        clearInterval(this.intervalId);
    }

}












