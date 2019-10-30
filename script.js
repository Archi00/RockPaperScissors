let options = ["rock", "paper", "scissors"];
let game_count = 0;
let player_win_count = 0
let computer_win_count = 0

document.getElementById("rock").onclick = user;
document.getElementById("paper").onclick = user;
document.getElementById("scissors").onclick = user;

function user(){
    let playerPlay = this.id;
    console.log("You play: " + playerPlay + "!")

    let computerPlay = options[Math.floor((Math.random()*options.length))];
    console.log("Computer plays: " + computerPlay + "!");
    
function game(computerPlay, playerPlay) {
    if (computerPlay == "rock" && playerPlay == "rock") {
      return ("Draw!!");
    } else if (computerPlay == "rock" && playerPlay == "scissors") {
        computer_win_count++;
        return ("rock vs scissors, rock wins so the winner is: Computer!!");
    } else if (computerPlay == "rock" && playerPlay == "paper") {
        player_win_count++;
        return ("rock vs paper, paper wins so the winner is: Player!!");
    } else if (computerPlay == "paper" && playerPlay == "paper") {

        return ("Draw!!");
    } else if (computerPlay == "paper" && playerPlay == "rock") {
        computer_win_count++;
        return ("paper vs rock, paper wins so the winner is: Computer!!");
    } else if (computerPlay == "paper" && playerPlay == "scissors"){
        player_win_count++;
        return ("paper vs scissors, scissors wins so the winner is: Player!!");
    } else if (computerPlay == "scissors" && playerPlay == "scissors"){

        return ("Draw!!");
    } else if (computerPlay == "scissors" && playerPlay == "paper"){
        computer_win_count++;
        return ("scissors vs paper, scissors wins so the winner is: Computer!!");
    } else if (computerPlay == "scissors" && playerPlay == "rock"){
        player_win_count++;
        return ("scissors vs rock, rock wins so the winner is: Player!!");
    }
}
console.log(game(computerPlay, playerPlay));
game_count++;

function game_result(player_win_count, computer_win_count) {
    if (player_win_count > computer_win_count) {
      return ("Player score = " + player_win_count + " Computer score = "
      + computer_win_count + " The winner is: The player!!");
    } else if (player_win_count < computer_win_count) {
        return ("Player score = " + player_win_count + " Computer score = "
        + computer_win_count + " The winner is: The computer!!");
    } else if (player_win_count == computer_win_count) {
        return ("Player score = " + player_win_count + " Computer score = "
        + computer_win_count + " It's a Draw!!");
    }
}
const results_div = document.querySelector('#results');

const player_content = document.createElement('div');
player_content.textContent = ("You play: " + playerPlay + "!");
results_div.appendChild(player_content);
const comp_content = document.createElement('div');
comp_content.textContent = ("Computer plays: " + computerPlay + "!");
results_div.appendChild(comp_content);
const result_content = document.createElement('div');
result_content.textContent = (game(computerPlay, playerPlay));
results_div.appendChild(result_content);

if (game_count == 5){
const gameResult = document.createElement('div');
gameResult.textContent = (game_result(player_win_count, computer_win_count));
results_div.appendChild(gameResult);
}
}

