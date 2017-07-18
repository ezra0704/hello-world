/*
*File:index.js
*author Ezra
*purpose: this is my hello,world application
*history 7/17/2017 this file was created
*
*/

var msg1 = "hello world, " ;

var msg2 = "my name is ... " ;

var msg3 = "i dont have a name yet :("

function checkForName(msg2) {
    if (msg2.includes('name')) {
        return 'hello!' ;
    } else {
        return 'goodbye';
    }
}



console.log(checkForName(msg1));
console.log(checkForName(msg2));

function concat(part1, part2, part3) {
    var smushed = part1.concat(part2, part3);
    return smushed;
}
console.log(concat(msg1, msg2, msg3))

