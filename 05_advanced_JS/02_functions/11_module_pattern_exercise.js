

const task = (function makeTask(){
    const tasks = [];
    function isString( val ) {
        return typeof val === 'string';
    }
    const task = {
        add(item){
            if(isString(item)){
                tasks.push(item);
            }
        },
        remove(item){
            tasks=tasks.filter(
                function(t){
                    return t!= task;
                }
            )
        },
        show(){
            console.log(tasks);
        }
    }
    return task;


})();

task.add('a');
task.add('b');
task.add('c');
task.remove('c');
task.show('c');










