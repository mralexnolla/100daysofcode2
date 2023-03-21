// let creat the guess a number game with node js 
// guess a number from 1 through 10

let secretValue = Math.floor(1 + Math.random()*10).toString();

let numbers = ['1','2','3','4','5','6','7','8','9','10'];

module.exports = {
    testNumber: (input) => {
        if(input === 'quit'){
            process.stdout.write('ok Bye!\n');
            process.exit();
        }
        if(!numbers.includes(input)){
            process.stdout.write('Choose a number from 1 through 10!\nIs the number ...');
        }else if(input === secretValue){
            process.stdout.write('woah you got it! Are you a psychic? See you latter!\n')
            process.exit();
        }else{
            process.stdout.write("Nope. Guess again\n the number ...")
        }
    }
}