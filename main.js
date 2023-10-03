let computerNum=0;
let playbutton=document.getElementById("play-button");
let userinput=document.getElementById("user-input");
let resultarea=document.getElementById("result-area");
let resetbutton=document.getElementById("reset-button");
let chances = 5 ;
let gameover = false;
let chancearea=document.getElementById("chance-area");
let history=[ ]

playbutton.addEventListener("click".play);
resetbutton.addEventListener("click".reset);
userinput.addEventListener("fucus",function(){userinput.value=""});

function pickRandomNum(){
    computerNum=Math.floor(Math.random() * 100)+1;    
    console.log=("정답",computerNum);  
}
function play(){
    let uservalue= userinput.value;
    if(uservalue<1 || uservalue>100){
        resultarea.textContent="1과 100사이 숫자를 입력해주세요!";
        return;
    }
    if(history.includes(uservalue)){
        resultarea.textContent="이미 입력한 숫자입니다. 다른숫자를 입력해주세요"; 
        return;
    }
    chances -- ;
    chancearea.textContent=`남은 기회:${chances}번`;
    console.log=("chance",chances);
     if(uservalue<computerNum){
        resultarea.textContent="UP!!";
       
     }else if(uservalue>computerNum){
        resultarea.textContent="down!!";
      
     }else {
        resultarea.textContent="맞추셨습니다";
        gameover=true;
     }
     history.push(uservalue);
     if(chances<1){
        gameover==true;
     } 
     if(gameover==true){
        playbutton.disabled==true;
     }
     }
function reset(){
    userinput.value="";
    pickRandomNum();
    resultarea.textContent="결과값이 나옵니다!!"
}     
 pickRandomNum();

 
 
 