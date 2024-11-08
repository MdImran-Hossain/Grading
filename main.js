let mark= prompt('Enter your number is:')
if(mark>=0 && mark<=32){
    alert('you are fail');
}
else if(mark>=33 && mark<=39){
    alert('Your grade is D');
}

else if(mark>=40 && mark<=49){
    alert('Your grade is C');
}

else if(mark>=50 && mark<=59){
    alert('Your grade is B');
}

else if(mark>=60 && mark<=69){
    alert('Your grade is A-');
}

else if(mark>=70 && mark<=79){
    alert('Your grade is A');
}

else if(mark>=80 && mark<=100){
    alert('Your grade is A+');
}
else{
    alert('Meet teacher')
}