let userScore=0;
let compScore=0;
let userScorepara=document.querySelector("#user-score");
let compScorepara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
let gameArea=document.querySelector(".game-area");
let user=document.querySelector(".user");
let comp=document.querySelector(".comp");
let rockleft=document.querySelector(".rockleft");
let handleft=document.querySelector(".handleft");
let scissorleft=document.querySelector(".scissorleft");
let handright=document.querySelector(".handright");
let rockright=document.querySelector(".rockright");
let scissorright=document.querySelector(".scissorright");
let msg=document.querySelector(".msg");
let select=document.querySelector(".select");
let chances=document.querySelector("#chances");
let count=1;
// let rockleft1=document.querySelector(".rockleft1");
// let rockright1=document.querySelector(".rockright1");
// rockleft1.classList.add("hide");
// rockright1.classList.add("hide");
const gencompChoice=(compChoice)=>
{
    let options=["rock", "paper","scissor"];
    let randidx=Math.floor(Math.random()*3);
    
       console.log("comp choice=" ,options[randidx]);
    return options[randidx];
};
const showWinner= ()=>
{
    if(userWin)
    {
        msg.innerText=`You won!`;
        msg.style.backgroundColor="green";
        console.log("You Win");
        compScorepara.innerText=compScore;
        userScore++;
          userScorepara.innerText=userScore;     
        console.log("user-score=",userScore);
    }
    else
        {console.log("Comp win");
            msg.innerText=`You lose!`;
            msg.style.backgroundColor="red";
            userScorepara.innerText=userScore;
            compScore++;  
             compScorepara.innerText=compScore;
        console.log("comp-score=",compScore);
        }
};
const playGame=(userChoice)=>
{
console.log("user choice=", userChoice);
let compChoice= gencompChoice();
if(compChoice==="rock")
    {
        gameArea.classList.remove("hide");
        user.classList.remove("hide");
        comp.classList.remove("hide");
         scissorright.classList.add("hide");
         handright.classList.add("hide");
        rockright.classList.remove("hide");
        userWin=compChoice==="paper"?false:true;
    }
    else if(compChoice==="paper") 
    {
        gameArea.classList.remove("hide");
        user.classList.remove("hide");
        comp.classList.remove("hide");
        rockright.classList.add("hide");
        scissorright.classList.add("hide");
        handright.classList.remove("hide"); 
        userWin=compChoice==="scissor"?false:true;
    }
    else
    {
        gameArea.classList.remove("hide");
        user.classList.remove("hide");
        comp.classList.remove("hide");
        rockright.classList.add("hide");
        handright.classList.add("hide");
        scissorright.classList.remove("hide"); 
        userWin=compChoice==="rock"?false:true;
    }
userWin=true;
if(userChoice===compChoice)
{
    userScorepara.innerText=userScore;
    compScorepara.innerText=compScore;
    if(userChoice==="rock"&&compChoice==="rock")
    {
        gameArea.classList.remove("hide");
        user.classList.remove("hide");
        comp.classList.remove("hide");
         scissorright.classList.add("hide");
         handright.classList.add("hide");
          scissorleft.classList.add("hide");
         handleft.classList.add("hide");
        rockleft.classList.remove("hide");
        rockright.classList.remove("hide");

    }
    else if(userChoice==="paper"&&compChoice==="paper")
    {
        gameArea.classList.remove("hide");
        user.classList.remove("hide");
        comp.classList.remove("hide");
        rockright.classList.add("hide");
        scissorright.classList.add("hide");
        rockleft.classList.add("hide");
        scissorleft.classList.add("hide");
        handleft.classList.remove("hide"); 
        handright.classList.remove("hide"); 

    }
    else
    {
        gameArea.classList.remove("hide");
        user.classList.remove("hide");
        comp.classList.remove("hide");
        rockright.classList.add("hide");
        handright.classList.add("hide");
        rockleft.classList.add("hide");
        handleft.classList.add("hide");
        scissorleft.classList.remove("hide"); 
        scissorright.classList.remove("hide"); 
    }
    msg.innerText=`Game Draw!`
    console.log("Game draw"); 
}
else 
{
    if(userChoice==="rock")
    {
        gameArea.classList.remove("hide");
        user.classList.remove("hide");
        comp.classList.remove("hide");
         scissorleft.classList.add("hide");
         handleft.classList.add("hide");
        rockleft.classList.remove("hide");
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper") 
    {
        gameArea.classList.remove("hide");
        user.classList.remove("hide");
        comp.classList.remove("hide");
        rockleft.classList.add("hide");
        scissorleft.classList.add("hide");
        handleft.classList.remove("hide"); 
        userWin=compChoice==="scissor"?false:true;
    }
    else
    {
        gameArea.classList.remove("hide");
        user.classList.remove("hide");
        comp.classList.remove("hide");
        rockleft.classList.add("hide");
        handleft.classList.add("hide");
        scissorleft.classList.remove("hide"); 
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin);
}
};
choices.forEach((choice) => {
    choice.addEventListener("click", ()=>
    {
        chances.innerText=`${count}/5`;
        console.log(count);
        select.classList.add("hide");
          msg.style.backgroundColor="rgb(87, 84, 84)";
        count++;
        const userChoice=choice.getAttribute("Id");
        playGame(userChoice);
        if(count===6)
        {
            
            if(userScore>compScore)
            { 
                userScorepara.innerText=userScore;
            compScorepara.innerText=compScore;
               msg.innerText=`Congratulations! You won...`;
               msg.style.backgroundColor="green";
                
            }
            else if (userScore<compScore)
            {
                userScorepara.innerText=userScore;
            compScorepara.innerText=compScore;
                msg.innerText=`You lose! Try again...`;
                msg.style.backgroundColor="red";
                
            }
            else{
                userScorepara.innerText=userScore;
            compScorepara.innerText=compScore;
                msg.innerText=`Game Draw! Try one more time`;
                msg.style.backgroundColor="rgb(87, 84, 84)";
                
            }
            count=1;
            
            // gameArea.classList.add("hide");
            userScore=0;
            compScore=0;
            select.innerText=`Click the choices below to Play Again!`;
            select.style.backgroundColor="green";
            select.classList.remove("hide");
        }
        
    });
});