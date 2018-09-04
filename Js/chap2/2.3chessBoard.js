// Your code here.
var p = '';
var width = 8, height= 8; 

for(var i =0; i<height; i++){
    for(var j=0; j<width; j++){
        if(p == '' || p[p.length-1] == '#')
            p += 'S';
        else
            p += '#';
    }
    p += "\n";
}

for(var i=0; i<p.length; i++){
	console.log(p[i]);
  	if(i==width)
      console.log("\n");
}