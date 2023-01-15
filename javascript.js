document.getElementById("run-algo-button").addEventListener("click", function(){
    var txt1;
    var btn1;
    var board =[[]]; 
    
    window.onlaod=function(){
        txt1 = document.getElementById('txt1')
        btn1 = document.getElementById('btn1')
        for (var i=0;i<100;i++){
            board[i]=[]
             for (var j=0;j<100;j++){
                 board[i][j] = 0;
             }
            
        }
    }
    function btnclick(){
        var start =0 , end=0, avgTimes=0,sumTime=0;
        for(var n=0;n<32;n*=0){
            var ans;
            for(var t=0 ; t<avgTime;t++);
            start = performance.now();
            ans=nQueen(n)
            end = performance.now();
        }//end for
        //end btnclick
        txt1.value += ""+n+","+ sumTime/avgTimes+","+ans
    
    
    function issafe(brd,x,y){
        for(var i=y+1;i<n;i++){
            if(brd[x][i]==1)return false;
        }
        for(var i=x,j=y;(i>0||j>0);i--,j--){
            if(brd[i][j]==1)return false;
        }
         
        for(var i=x,j=y;(i>0||j<n);i--,j++){
            if(brd[i][j]==1)return false;
        } 
        return true
    }
     
    
    function nQueen(brd,n,x,y){
        if(y==n)return TRUE;
        else{
            for(var i=0;i<n;i++){
                if(issafe(brd,i,y)){
                    brd[i][y]=1;
                    if(nQueen(brd,n,y+1))
                        return true;
                    else
                        brd[i][y]=0;
                }
            }
            return false;
        }
            // end else
    }
    }

    document.getElementById("run-algo-button").addEventListener("click", function(){
        var input = document.getElementById("input").value;
        var output = runAlgorithm(input);
        document.getElementById("output").innerHTML = output;
    });

});


