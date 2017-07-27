range = function(a,b,step){
  var A=[];
  if (!b) [b,a]=[a,0];
  step = step || 1;
  A[0]=a;
  while(a+step<=b-1){
    A[A.length]= a+= step;
  }
	return A;
}

print = function(a,b){
	if (!b) {
		console.log(a);
	} else {
		var a = a.map(function(x,i){return i?"<br/>"+x:x})
		var printBox = d3.select("#printBox")
		printBox.append("div")
			.attr("class","text")
			.html(a)
	}
}

lattice = function(y,x){
	if (!x) x=y;
	var grid = [];
	for (a of range(2*x-1)){
		for (b of range(2*y-1)){
			var i = a - y + 1;
			var j = b - x + 1;
			grid.push([i,j]);
		}
	}
	return grid;
}
