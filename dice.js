var p1=0;
var p2=0;
var count=0;
var win=30;

function rolldice(){
    var numdice=Math.floor((Math.random()*6)+1)
        if(count%2==0){
            p1=p1+numdice;
            document.getElementById("number").innerText = numdice;
            document.getElementById("player1score").innerText = p1;
            count++;
            if(p1>=win){
                document.getElementById("result").innerHTML = "<b>Congrats! Player 1 won.</b>"; 
            }
        }
        else{
            p2=p2+numdice;
            document.getElementById("number").innerText = numdice;
            document.getElementById("player2score").innerText = p2;
            count++;
            if(p2>=win){
                document.getElementById("result").innerHTML = "<b>Congrats! Player 2 won.</b>";
            } 
        }
}