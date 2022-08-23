function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise( (resolve, reject) => {
    let headsCount = 0
    let attempts = 0
    let maxAttempts = 100

    while(headsCount < 5 && attempts <= maxAttempts){
        let result = tossCoin()
        console.log(result)
        if(result === 'heads'){
            headsCount ++
            attempts ++
        }else{
            headsCount = 0
            attempts ++
        }
    }
    if(attempts <= maxAttempts){
        resolve(`${attempts} attempts`)
    }else{
        reject("It took over 100 attempts")
    }
});
}

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );