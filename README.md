# Bounty-Hunter007.github.io

# TRANSITIVE-CLOSURE--Floyd-Warshall


# ASSINGMENT:02


## What is transitive closure of a graph

It is a matrix m in which
m[i][j] is True if there j is reachable from i (can be a more than 1 edge path)
m[i][j] is False if j cannot be reached from i

Once we get the matrix of transitive closure, each query can be answered in O(1) time
eg: query = (x,y) , answer will be m[x][y]

To compute the matrix of transitive closure we use Floyd Warshall's algorithm which takes O(n^3) time and O(n^2) space.

## Usage/Examples
TRANSITIVE Closure MATRIX ALGORITEMS

```javascript
function Display(gain) {
		document.write("Transitive Closure Matrix");
		for (var i = 0; i < V; i++) {
		    for (var j = 0; j < V; j++) {
		        if (i == j)
		        document.write("1 ");
		        else  
		        document.write(gain[i][j] + " ");
		}
	
		document.write(" ");
		}
	}
var V = 4; 
	var trcl = [
		[1, 1, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 1, 1],
		[0, 0, 0, 1],
	];
	function Calcu(trcl) {
		var gain = Array.from(Array(V), () => new Array(V));
		var i, j, k;
		for (i = 0; i < V; i++){
		    for (j = 0; j < V; j++){
		        gain[i][j] = trcl[i][j];
		        for (k = 0; k < V; k++) {
		            for (i = 0; i < V; i++) {
		                for (j = 0; j < V; j++) {
		                    gain[i][j] = gain[i][j] != (gain[i][k] != 0 && gain[k][j] != 0)
				                ? 1
				                : 0;
		  	}
		}
	}
}
}
		Display(gain);
	}
	

	Calcu(trcl);

```


## OUTPUT:
![Transitive closure algo](https://user-images.githubusercontent.com/117972508/201493585-2048af39-fd55-4a25-a7eb-93ba20cd95b7.jpeg)
