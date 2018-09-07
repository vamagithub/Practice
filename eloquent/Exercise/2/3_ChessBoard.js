

do{
    var row = Number(prompt("Enter Row for row x N grid"));
    var col = Number(prompt("Enter column from N x col grid"));
}while(!size);

for(var i=0; i<row; i++){ //row
var pattern ='';
    if(i%2 !== 0){
        for(var j=0; j<col/2; j++)
            pattern += "_#";
        console.log(pattern);
    }else {
        for(var j=0; j<col/2; j++)
            pattern += "#_";
        console.log(pattern);
    }

}