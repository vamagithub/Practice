
for(var i=0; i<7; i++){
    
    var pattern = '';
    
    for(var j=0; j<=i; j++){
        pattern += '*'
    }
    
    console.log(pattern+"\n");
}


/* --------- OR --------------*/

for(var pattern='*'; pattern.length < 7; pattern+= '*'){
    console.log(pattern);
}

/* --------- OR --------------*/


for(var i=0; i<7; i++){
    
    var pattern = '';

    for(var j=i; j>=0; j--){
        pattern += '*'
    }
      
      console.log(pattern+"\n");
  }

  /* ----------- o/p ----------------*/

/* -- 

  *
  **
  ***
  ****
  *****
  ******
  *******

--  */