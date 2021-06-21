/*====================== [SECTION 1] Javascript in terminal ========================*/

/*============================= Part #1 =======
return value not using varibles======================*/

function five() {
    return 5;
}

//console.log(five)

/*============================= Part #2 =========
console one value from array====================*/
    
const array = ["apple", "pear", "banana", "strawberry"];

    function myArray() {     
        return array[1];
    }

    //console.log(myArray());

/*============================= Part #3 =========
print out each letter seperately from the string====================*/

function hello(myString) {
     for (let i = 0; i < myString.length; i++) {
       // console.log(myString[i]);
     }
}

//hello("HELLO");

/*============================= Part #4 =======
print out every other character======================*/

function goodbye(string) {
    for (var i = 0; i < string.length; i++) {
        //console.log(string.charAt(i));
        i += 1;
    }
}

goodbye("GOODBYE");

