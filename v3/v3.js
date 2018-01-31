// Verkefni 3 í javascript
// 1. template literal er strengur sem inniheldur "expression" og getur farið yfir margar línur
let b = "random name";
let a = ' Hello ${b} 
nice to see you again');
/* þetta skilar:
Hello random name
nice to see you again
*/

// 2. foreach virkar bara á array og skilar í hvert skipti sem loopan keyrir valuinu úr þessu array indexi : foreach x in myArr kemur x verður myArr[counter]
//    for in lykkjan virkar eins og foreach nema að for in skilar Örinni sem bendir á gildið: x[0] og x[1]
//    for of lykkjan skilar gilinu í objectinu: ef arr = [3, 5, 7] á skilar for in 0, 1, 2 og for of 3, 5 ,7
//    for lykkjan loopar hinsvegar bara x mörgum sinnum í gegnum næstum hvað sem er


//  3. .Reverse snýr streng eða array við
//     .sort raðar array
//     .shift og .splice getur verið nýtt til að taka fyrsta gildi úr array
//     .join getur verið notað til að breyta array í streng


//   4.
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,19, 300, 3775, 299, 36, 209, 148, 169, 299,6, 109, 20, 58, 139, 59, 3, 1, 139];

test.foreach(function(element){
    if(element % 3 === 0){
        element += 100;
    }
    console.log(element);
});


