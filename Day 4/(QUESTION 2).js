console.log("hello!")
const student = 
{
    name : "Helsinki",
    age : 24,
    projects : {
        diceGame : "Two player dice game using JavaScript."
    }
}
const{ name, age}=student
console.log(name,age);

const{projects}=student
console.log( projects);

const{projects:{diceGame}}=student
console.log(projects,diceGame);

