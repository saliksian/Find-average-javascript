const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Avgerage(sub1,sub2,sub3){
    let sum = parseInt(sub1)+parseInt(sub2)+parseInt(sub3);
    let avg = sum/3;
    if(avg > 80){
        console.log("You are above standard, Admission Granted!");
    }else{
        console.log("You are below Standard,Better Luck for Next time!");
    }
}

rl.question("Enter Marks of 1st Subject:  ", function(S_1) {
    
rl.question("Enter Marks of 2nd Subject:  ", function(S_2) {

    rl.question("Enter Marks of 3rd Subject:  ", function(S_3) {

        Avgerage(S_1,S_2,S_3);
        rl.close();
        });
    });          
});