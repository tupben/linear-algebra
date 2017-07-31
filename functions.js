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
// print(math.range(0,4)._data)


print = function(a,b){
	if (!b) {
		console.log(a);
	} else if (typeof a === "object" || typeof a === "list"){
		var printBox = d3.select("#printBox")
			.append("div")
			.attr("class","text")
			.html(a[0][0]+" "+a[0][1]+"<br />"+ a[1][0]+" " + a[1][1])
	} else {
		var printBox = d3.select("#printBox")
			.append("div")
			.attr("class","text")
			.html(a)
	}
}



lattice = function(x){
	var newLattice = [];
	for (a of range(2*x-1)){
		for (b of range(2*x-1)){
			var i = a - x + 1;
			var j = b - x + 1;
			newLattice.push([i,j]);
		}
	}
	return newLattice;
}


grid = function(x) {
	var newGrid  = [];
	for (a of range(4*x+1)) {
		var xline_1 = [[0,a],[4*x,a]];
		var xline_2 = math.subtract(xline_1,2*x);
		var xline_3 = math.divide(xline_2,2);
		newGrid.push(xline_3)
		var yline_1 = [[a,0],[a,4*x]];
		var yline_2 = math.subtract(yline_1,2*x);
		var yline_3 = math.divide(yline_2,2);
		newGrid.push(yline_3)
	}
	return newGrid;
}

