/*
My solution for the "Counting Cards" challenge from freeCodeCamp.
Challenge link: https://www.freecodecamp.org/challenges/counting-cards


INSTRUCTIONS:

You will write a card counting function. 
It will receive a 'card' parameter and increment or decrement the global count variable according to the card's value (see table). 
The function will then return a string with the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative. 
The current count and the player's decision ("Bet" or "Hold") should be separated by a single space.

Example Output:
"-3 Hold"
"5 Bet"

Expected results:
Cards Sequence 2, 3, 4, 5, 6 should return "5 Bet"
Cards Sequence 7, 8, 9 should return "0 Hold"
Cards Sequence 10, J, Q, K, A should return "-5 Hold"
Cards Sequence 3, 7, Q, 8, A should return "-1 Hold"
Cards Sequence 2, J, 9, 2, 7 should return "1 Bet"
Cards Sequence 2, 2, 10 should return "1 Bet"
Cards Sequence 3, 2, A, 10, K should return "-1 Hold"

Coded by Alexandru Matache (@Pufanul)
freeCodeCamp profile: https://www.freecodecamp.org/pufanul
*/

//sets the starting point at 0
var count = 0;

//creates the  function that counts the cards. It is given a 'card' parameter. 
function cardCounting(card) {
  //I used a 'switch' statement instead of an 'if / else if' statement because the code is much tidier this way. I think there is a better way to do this, but this is my solution for the moment.
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      //if the the arguments '2-6' are passed to the 'card' parameter, then the 'count' variable will be incremented by +1 to keep track.
      count++;
      break;
    case 7:
    case 8:
    case 9:
      //if the the arguments '7-9' are passed to the 'card' parameter, then the 'count' variable won't be modified.
      count = count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      //if the the arguments '10','J','Q','K','A' are passed to the 'card' parameter, then the 'count' variable will be decremented by -1 to keep track.
      count--;
      break;
  }
  //if statement to return the correct string when the 'count' variable is below or equal to 0 and above 0.
  if (count <= 0) {
    return count + " Hold";
  } else if (count >0) {
    return count + " Bet";
  }
  
  //if no correct arguments from the above interval are passed, then the user will be asked to change the arguments.
  return "Change Me";
}

//calling the function
cardCounting(2); cardCounting("J"); cardCounting(9); cardCounting(2); cardCounting(7);
