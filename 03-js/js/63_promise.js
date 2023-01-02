

function sum(x,y){
    return new Promise(function(resolve , reject){
        setTimeout(
            function(){

                if(typeof x!=='number' || typeof y !=='number'){
                    reject(new Error('At least one of the arguments was not a number'))
                    return;
                }


                const result = x+y;

                resolve(result)
            }
        ),3000
    })
}

sum(12,'p')
    .then(
    function(result1){
        console.log('result1 = ',result1 )
    }
    )
    .catch(
        function(error){
            console.log(error.message);
        }
    )






