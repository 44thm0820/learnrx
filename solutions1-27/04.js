Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		results.push(projectionFunction(itemInArray));

	});
  console.log(results);

	return results; //returns[ 2, 3, 4 ]

};
// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]')
console.log(JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'); // prints true
