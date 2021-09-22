let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user_score');
const compScore_span = document.getElementById('comp_score');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

const getCompChoice = () => {
  const compChoices = ['r','p','s'];
  const randomIndex = Math.floor(Math.random()*3);
  return compChoices[randomIndex];
}

const getChoiceName = (choice) => {
  switch(choice) {
    case 'r':
      return 'Rock';
    case 'p':
      return 'Paper';
    case 's':   
      return 'Scissors';
  }
}

const userWon = (userChoice, compChoice) => {
  console.log('user won');
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;

  const userChoiceName = getChoiceName(userChoice);
  const compChoiceName = getChoiceName(compChoice);

  result_p.innerHTML = `User picked ${userChoiceName} and Comp picked ${compChoiceName}. You won!!`;
}

const compWon = (userChoice, compChoice) => {
  console.log('comp won');
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;

  const userChoiceName = getChoiceName(userChoice);
  const compChoiceName = getChoiceName(compChoice);

  result_p.innerHTML = `User picked ${userChoiceName} and Comp picked ${compChoiceName}. You lost... :(`;
}

const draw = (userChoice, compChoice) => {
  console.log('draw');

  const userChoiceName = getChoiceName(userChoice);
  const compChoiceName = getChoiceName(compChoice);

  result_p.innerHTML = `User picked ${userChoiceName} and Comp picked ${compChoiceName}. It's a draw '-'`;
}

const game = (userChoice) => {
  const compChoice = getCompChoice();
  console.log(`Escolha do user => ${userChoice}`);
  console.log(`Escolha do comp => ${compChoice}`);
  switch(userChoice + compChoice){
    case 'rs':
    case 'pr':
    case 'sp':
      userWon(userChoice, compChoice);
      break;
    case 'sr':
    case 'rp':
    case 'ps':
      compWon(userChoice, compChoice);
      break;
    case 'pp':
    case 'rr':
    case 'ss':
      draw(userChoice, compChoice);
      break;
  }
}


const main = () => {
  rock_div.addEventListener('click', () => {
    game('r')
  })
  paper_div.addEventListener('click', () => {
    game('p')
  })
  scissors_div.addEventListener('click', () => {
    game('s')
  })
}

main();