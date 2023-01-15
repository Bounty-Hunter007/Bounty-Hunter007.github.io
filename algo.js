document.getElementById("run-algo-button").addEventListener("click", function(){
    // code for running the algorithm goes here

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
document.getElementById("run-algo-button").addEventListener("click", function(){
    var input = document.getElementById("input").value;
    var output = runAlgorithm(input);
    document.getElementById("output").innerHTML = output;
});
});

