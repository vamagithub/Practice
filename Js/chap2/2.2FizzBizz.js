for(var i=1; i<101; i++){
    var op = '';
    if(i % 3 == 0){
        op += 'Fizz';
    }
    if(i % 5 == 0){
        op += 'Bizz';
    }
    console.log(op||i); // left side empty then print right side value


}

