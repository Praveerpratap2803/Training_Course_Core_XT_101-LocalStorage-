
function printTime1(timeElapsed){
    console.log('printTime1 timeElapsed = ',timeElapsed);
}
function printTime2(timeElapsed){
    console.log('printTime2 timeElapsed = ',timeElapsed);
}

const watch1 = new Stopwatch();

watch1.addListener('tick',printTime1);
watch1.addListener('tick',printTime2);
watch1.addListener('stop',function(){
    console.log('stopwatch has stopped')
});
watch1.addListener('pause',function(){//pause is not there
    console.log('stopwatch has paused')
});

watch1.start();

setTimeout(
    ()=> watch1.stop(),
    10100
);










