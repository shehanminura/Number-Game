let count=0;
const guess1=Math.floor((Math.random()*10)+1);
console.log(guess1);
function Guess(){
    if(count<3){
    let number=document.getElementById("text").value;
    let mark=document.getElementById("mark");
    let printcount=document.getElementById("count");

    if(guess1==number){
        mark.innerHTML="winner";
        count++;
        printcount.innerHTML="Chances left:"+count;
    }else{
        if(count<2){
            if(guess1>number){
            count++;
            mark.innerHTML="try agin beacurs number is Large ";
            printcount.innerHTML="Chances left:"+count;
            }else{
                count++;
                mark.innerHTML="try agin beacurs number is smaler ";
                printcount.innerHTML="Chances left:"+count;       
                 }
        }else{
            count++;
            mark.innerHTML="you are out ";
            printcount.innerHTML="Chances left:"+count;
        }
    }
}



}