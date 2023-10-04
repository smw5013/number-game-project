let computerNum = 0;
let Inputarea = document.getElementById("User-Input");
let PlayButton = document.getElementById("Play-Button");
let Resultarea = document.getElementById("User-Result");
let Chance = document.getElementById("User-Chances");
let Chances = 5;
let GameOver = false;
let History = [];
let Resetarea = document.getElementById("Reset-Button");

Chance.textContent = `Chances: ${Chances}`;
PlayButton.addEventListener("click",Play);
Resetarea.addEventListener("click",Reset);
Inputarea.addEventListener("focus", function(){Inputarea.value = "";});

function randomNumber(){
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("Correct Answer",computerNum); 
}
randomNumber();

function Reset(){

    Inputarea.value="";
    randomNumber();
    Resultarea.textContent = "The results appear here";
    GameOver = false;
    PlayButton.disabled = false;
    Chances = 5;
    Chance.textContent = `남은 기회:${Chances}`;
    History = [];
}

function Play(){

    let UserNum = Inputarea.value;

    if(UserNum<1 || UserNum>100){
       Resultarea.textContent = "Please write a number between 1 and 100";  
       return; 
    }
    if(History.includes(UserNum)){
       Resultarea.textContent = "it's already done. please write another number";
       return;
    }

    Chances --;
    Chance.textContent = `Chances: ${Chances}`;
    History.push(UserNum);
    
    if(UserNum<computerNum){
        Resultarea.textContent = "Go!!";
    }
    if(UserNum>computerNum){
        Resultarea.textContent = "Down!!";
    }
    if(UserNum==computerNum){
        Resultarea.textContent = "Congratulation, you're right!!";
        GameOver=true;
    }
    if(Chances<1){
        GameOver=true;
    }
    if(GameOver==true){
        PlayButton.disabled = true;
    }
}


