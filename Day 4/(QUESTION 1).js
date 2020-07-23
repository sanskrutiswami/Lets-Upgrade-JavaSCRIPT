<!DOCTYPE html>
<html>
    <head>
        <title>DAY 4 QS.1 </title>
        <h4>Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and
            "fizzbuzz" at multiples of 3 and 5.</h4>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
        <script>
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
        </script>

    </body>

</html>


  



