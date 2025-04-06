# "Clean Code Snooker" Exercise

Hello and welcome.

This is an exercise in writing Clean Code. Your mission in this exercise is to implement the "business logic" of a simple React web application - written in TypeScript - that helps users keep score in a game of Snooker.

We begin with a quick reminder of the rules of Snooker. 

## How Snooker is Played
Snooker is a game played by 2 players. The game is played on a special table on which small balls in different colors are placed. 

![test](https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Snooker_table_selby.JPG/1600px-Snooker_table_selby.JPG?20121215005536)

Using special "cue sticks" the players each hit the single white ball, making it hit one or more balls in other colors. The goal of each strike is to get a single non-white ball to drop (or "sink") into one of 6 holes placed at the edges of the table.

In the beginning of our exercise, consider the following (partial) set of rules:

* Sunk balls award the player points according to their color (see below). 
* If a player fails to sink any balls in their turn, this is considered a "miss" and the turn moves to their opponent. 
* Once all balls have been sunk, the player with the highest score wins.

Now, the plot thickens. There are two stages in each Snooker game and each has its own rules. 

### Stage 1 of the game 

As long as there are red balls on the table, the game is in stage 1. This means:

* A player must start their turn by sinking a red ball (for 1 point).
* A sunk red ball is not returned to the table. 
* Once a player has sunk a red ball, they are entitled to a bonus shot to take aim at a non-red (non-white) ball. 
* If the non-red ball is sunk, the player gains the ball's points and the ball returns to the table.
* The player now goes back to sinking a red ball and so on.

### Stage 2 of the game
Once all 15 red balls have been sunk, and their bonus rounds played, a new stage begins in the game.
In stage 2, the players must sink the colored balls in the order of their value. I.e Yellow first, then Green, Brown, Blue, Pink and Black. 

Each colored ball that is sunk (in order) is not returned to the table.

## The Code

You are provided with a React web application written in TypeScript that already implements a basic "user interface" of sorts. The goal of this application is modest: To keep track of the score of a Snooker game as it progresses.

Please note that the UI is not the focus of the exercise. The exercise is concerned with implementing the "business logic" that calculates the game score.

Once you run the code you will see the message "Welcome to Snooker.” Then you will be prompted to enter the names of the two players.

Now the turn-based game begins. The current player's name is highlighted and you will be able to click on of several buttons.

At the start of the exercise the buttons do nothing. Your goal is to implement the following logic:

* "Miss" button: The current player should gain no points. The turn should change to the next player.

* "Red" / "Yellow"/ "Green" / "Brown" / "Blue" / "Pink" / "Black" buttons: The current player should gain the corresponding number of points and remain the current player. 

* Option 3 – Quit: A modal with the final score is shown and the game restarts for 2 new players. This is initially implemented.

## Your Mission
The UI code is already implemented. It is up to you to implement the logic behind it, starting from the file `Snooker.ts`. 

Good luck!
