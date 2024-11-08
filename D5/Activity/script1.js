let score = prompt("Enter Score")

if (Number(score) >= 90 )  {
    console.log("Your grade is A")
}  else  if ((Number(score) <= 89) && (Number(score) >= 80))  {
    console.log("Your grade is B")
}  else  if ((Number(score) <= 79) && (Number(score) >= 70))  {
    console.log("Your grade is C")
}  else  if ((Number(score) <= 69) && (Number(score) >= 60))  {
    console.log("Your grade is D")        
}  else  {
    console.log("Your grade is F")
}


    
