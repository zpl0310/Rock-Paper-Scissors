let userScore=0,compScore=0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const scissor_div=document.getElementById("s");
const paper_div=document.getElementById("p");
const convert={"r":"Rock","p":"Paper","s":"Scissor"};

function main(){
  rock_div.addEventListener('click',function(){
    game("r");

  });

  scissor_div.addEventListener('click',function(){
    game("s");

  });

  paper_div.addEventListener('click',function(){
    game("p")

  });
}

function game(userChoice){
  const computerChoice=getCompChoice();
  switch (userChoice+computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice,computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice,computerChoice);
      break;
  }
}

function win(user,comp){
  userScore++;
  userScore_span.innerHTML=userScore;
  compScore_span.innerHTML=compScore;
  const smallUser="user".fontsize(3).sub();
  const smallComp="computer".fontsize(3).sub();
  result_p.innerHTML= convert[user] +smallUser+" beats "+convert[comp]+smallComp+" , you win!";
  document.getElementById(user).classList.add('green-glow');
  setTimeout(()=>document.getElementById(user).classList.remove('green-glow'),500);
}

function lose(user,comp){
  compScore++;
  userScore_span.innerHTML=userScore;
  compScore_span.innerHTML=compScore;
  const smallUser="user".fontsize(3).sub();
  const smallComp="computer".fontsize(3).sub();
  result_p.innerHTML=convert[comp]+smallComp +" beats "+ convert[user] + smallUser+" , you lose!";
  document.getElementById(user).classList.add('red-glow');
  setTimeout(()=>document.getElementById(user).classList.remove('red-glow'),500);
}

function draw(user,comp){
  const smallUser="user".fontsize(3).sub();
  const smallComp="computer".fontsize(3).sub();
  result_p.innerHTML= convert[user] +smallUser+" equals "+ convert[comp]+smallComp+ " , It's a draw!";
  document.getElementById(user).classList.add('grey-glow');
  setTimeout(()=>document.getElementById(user).classList.remove('grey-glow'),500);
}

function getCompChoice(){
  const choices=['r','p','s'];
  let index=Math.floor((Math.random()*3));
  return choices[index];
}
main();
