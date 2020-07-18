console.log("loops")

let iteration= 0
for (let iteration=0;iteration<=100;iteration++) 
{
    if  ((iteration%3==0)&&(iteration%5==0))  
  {
    console.log(iteration+" ~ "+"FizzBuzz");
  }
    else if (iteration%3==0)
  {
    console.log(iteration+" ~ "+"Fizz");
  }  
    else if (iteration%5==0) 
  {
    console.log(iteration+" ~ "+"Buzz");
  }
  else
  {
    console.log(iteration);
  }
}



  



