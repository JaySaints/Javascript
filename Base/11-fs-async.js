const {readFile, writeFile} = require('fs');
console.log('Start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err){
        console.log(err);
        return;
    }
    const first = result;
    
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err){
            console.log(err);
            return;
        }
    const second = result;

    writeFile('./content/subfolder/result-sync.txt', 
            `${first}**********Hello Jay*********** ${second}`,
            (err, result) => {
                if(err){
                    console.log(err);
                    result;
                }
                console.log('Done with this task');
            }
        )
    })
})
console.log('Starting nest task');