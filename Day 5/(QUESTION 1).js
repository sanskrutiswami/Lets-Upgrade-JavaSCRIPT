/*Write a program which does the following things:
1. Takes a positive number from the user.
2. Makes an array of numbers till the number given by user
3. Use higher order function to filter the odd numbers
4. Generate and array of the cubes of the filtered numbers*/

console.log("Hello!");
let user = parseInt( prompt("ENTER A POSITIVE NUMBER : "));
let array = [];
for (i=1;i<= user;i++)
{
    array.push(i);
}
let userarray = array.filter((user)=>user%2!==0).map((user)=>user**3)
console.log(userarray);

