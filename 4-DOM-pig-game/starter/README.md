# pig-game

This web page was created by following the video tutorials on "The Complete JavaScript Course 2020: Build Real Projects!" by Jonas Schmedtmann. Slight modifications were added by myself for better UI and functionality.
Link to course: https://www.udemy.com/course/the-complete-javascript-course/

Through making this web page, I have learnt the following:
- Understanding DOM access and DOM manipulation
- Using functions in line with the DRY (Don't Repeat Yourself) principle


FYI, as there are many versions of the pig game, this version has the following rules:
- The game has 2 players, playing in rounds
- In each turn, a player rolls the dice as many times as they wish. Each result get added to his (temporary) ROUND score
- However, if the player rolls a 1, all their ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'HOLD', which means that their ROUND score gets added to their GLOBAL score. After that, it's the next player's turn again
- The player to reach 100 points on the GLOBAL score first wins the game (winning score can be changed in the input. default is 100 points)
- A player can lose their GLOBAL score as well if they roll two 6. After that, it's the next player's turn