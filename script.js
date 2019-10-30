let options = ["rock", "paper", "scissors"];
let game_count = 0;
let player_win_count = 0
let computer_win_count = 0



do {
let computerPlay = options[Math.floor((Math.random()*options.length))];
let playerChoice= prompt("What do you want to play?",);
let playerPlay = playerChoice.toLowerCase();

console.log("Computer plays: " + computerPlay + "!");
console.log("Player plays: " + playerPlay + "!");

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
} while (game_count < 5);


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
alert(game_result(player_win_count, computer_win_count));
setTimeout("location.reload(true);",5);