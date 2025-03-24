// question 
/* Exercise: Using everything you’ve learned up until this point,
//  write a script that asks a user about the width, height, and length of a box,
 then calculate and return to the user the volume of this box.*/ 

//  Answer

let width=window.prompt("Please enter a width of Box");
let height=window.prompt("Please enter a height of Box");
let length=window.prompt("Please enter length of Box");

let volume=width*height*length;
window.alert(`The Calculated volume of the Box will be =   ${volume}`);