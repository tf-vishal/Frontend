# Rock Paper Scissors Game

A simple console-based Rock Paper Scissors game built with vanilla JavaScript. Play against the computer for 5 rounds and see who comes out on top!

## 🎮 How to Play

1. Open `index.html` in your web browser
2. Open the browser console (Press `F12` or right-click → Inspect → Console)
3. When prompted, enter your choice: `rock`, `paper`, or `scissors`
4. The computer will randomly make its choice
5. Play 5 rounds and see who wins!

## 🎯 Game Rules

- **Rock** beats **Scissors**
- **Scissors** beats **Paper**
- **Paper** beats **Rock**
- Same choices result in a tie

## 📁 Project Structure

```
rock-paper-scissors/
│
├── index.html          # Main HTML file
├── script.js           # Game logic
└── README.md          # This file
```

## 🚀 Setup

1. Clone or download this repository
2. No installation required - just open `index.html` in a browser!

```bash
git clone <your-repo-url>
cd rock-paper-scissors
```

## 💻 Technical Details

### Functions

- **`getComputerChoice()`** - Randomly generates the computer's choice using `Math.random()`
- **`getHumanChoice()`** - Gets player input via browser prompt
- **`playRound(humanChoice, computerChoice)`** - Plays a single round and updates scores
- **`playGame()`** - Main game loop that runs 5 rounds and declares the winner

### Features

- Case-insensitive input (ROCK, rock, RoCk all work)
- Score tracking across rounds
- Round-by-round results
- Final winner announcement

## 🎓 Learning Objectives

This project demonstrates:
- Functions and function parameters
- Conditional statements (if/else)
- Random number generation with `Math.random()`
- User input with `prompt()`
- Loops (for loop)
- Variable scope
- String manipulation

## 🔮 Future Enhancements

- Add a GUI with buttons instead of console input
- Best of 3, 5, or custom round counts
- Score history and statistics
- Additional game modes (Lizard, Spock)
- Sound effects and animations

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Built as part of The Odin Project curriculum.

---

**Enjoy the game! May the odds be ever in your favor!** 🎲