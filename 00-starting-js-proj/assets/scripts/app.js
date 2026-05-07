//import { apiKey } from "./util.js";
//import apiKey from "./util.js"

import * as Util from "./util.js";
console.log(Util.name);
console.log("Hello world")


function greetUser(userName, message = "Budsss"){
    // console.log(userName);
    // console.log(message);'
    return "Hi my name " + userName + " " + message;
}


const greetUser1 = 
function get(){
    console.log("Hello Qkuk");
}

const user = {
    name : "Qkuk",
    age : 30
};


class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

const hobbies = ["Gaming","Reading", "Dancing"];
const newHobbies = ["Catur"];

const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);



console.log(hobbies);

const index = hobbies.findIndex((item) => item === "Sports");
console.log(index);

const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);

const user1 = new User("Budi", 34);
console.log(user1);

console.log(user);
console.log(greetUser("Qkuk"))