


/*

print 1 - 100 
%3 Fizz instead the number
%5 Buzz

*/
let str;
for(var i=0; i<15; i++){
    str = '';
    if(i%3 == 0 )
        str += "Fizz";
    if(i%5 == 0 )
        str += "Bizz";
    
    console.log(str || i);    
}
