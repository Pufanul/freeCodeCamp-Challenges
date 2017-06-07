/*=========CHECK FOR POLINDROMES CHALLENGE======== 
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: 
  -You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
  -We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
  -We'll also pass strings with special symbols, such as "2A3*3a2", "2A3  3a2", and "2_A3*3#A2". 
*/

function palindrome(str) {  //assign a "start" and an "finish" pointer  
  var start = 0;  
  var finish = str.length - 1;
  
  //"start" and "finish" pointers won't always meet in the middle, so it's best suited to use (start > finish)
  //this will compare the second half of the string with the first half of the string to see if the current characters match
  while (finish > start) {    
  
    //increments "start" pointer if current character doesn't meet the criteria
    //"[" and "]" are the start and end of a character set.
    //"\W" means any "non-word" character, as opposed to "\w which will match a word.
    //"_" is the underscore character.
    //"/" marks the beginning and end of a regular expression. 
    while ( str[start].match(/[\W_]/) ) {      
      start++;   //increments the "start" pointer if it matches any non-word character   
      continue;    
      }    
    
    //decrements "finish" pointer if current character doesn't meet the criteria    
    while ( str[finish].match(/[\W_]/) ) {      
      finish--;  //decrements the "finish" pointer if it matches any non-word character    
      continue;    
    }    
    
    //finally does the comparison on the current character    
    if ( str[start].toLowerCase() !== str[finish].toLowerCase() ) return false;  //return false if characters from both halfs don't match
    start++;    //increments the start pointer by 1 to compare again
    finish--;   //decrements the finish pointer by 1 to compare again
  }    
  
  //if the whole string has been compared without returning false, it's a palindrome!  
  return true;
}

palindrome("eye");
