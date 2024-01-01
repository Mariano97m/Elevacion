//1 
console.log(hello);                                   
var hello = 'world';                                 
//var hello = "word"
//console.log(hello);//undefined

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
/*
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);//"magnet"
}
test();
 */

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
/*
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);//"super cool"
*/

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/*
var food = 'chicken';
console.log(food);
function eat(){
    food = 'half-chicken';
    console.log(food);//half-chicken
    var food = 'gone';
}
eat();
*/

//5

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

/*
mean();// se esta llamando a una funcion que no existe
console.log(food);//chicken
var mean = function() {
    food = "chicken";
    console.log(food);//chicken
    var food = "fish";
    console.log(food);//fish
}
console.log(food);//chicken
*/

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

/*
var genre = "disco";
console.log(genre);//no definido-undefined
function rewind() {
    genre = "rock";
    console.log(genre);//rock
    var genre = "r&b";
    console.log(genre);//r&b
}
rewind();
console.log(genre);//disco
*/

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
/*
    //var dojo = "burbank";
dojo = "san jose";
console.log(dojo);//san jose
function learn() {
    //var dojo = "burbank";
    dojo = "seattle";
    console.log(dojo);//seatle
    var dojo = "burbank";
    console.log(dojo);//burbank
}
learn();
console.log(dojo);//san jose
*/

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
       const dojo = "closed for now";
    }
    return dojo;
}


/*
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

*/
