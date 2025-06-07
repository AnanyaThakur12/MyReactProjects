import React, { useState } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

const TicTacToe = () => {
    const [boxes, setBoxes] = useState(Array(9).fill(""))
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleBoxClick = (index) => {
        if (boxes[index] !== '' || winner) return;

        const newBoxes = [...boxes];
        newBoxes[index] = isXTurn ? "x" : "o";
        setBoxes(newBoxes);

        const result = checkWinner(newBoxes);
        if (result) {
            setWinner(result);
        }
        else {
            setIsXTurn(!isXTurn);
        }
    }

    const resetGame = () => {
        setBoxes(Array(9).fill(""));
        setIsXTurn(true)
        setWinner(null);
    }

    const checkWinner = (boxes) => {
        const winningPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]]

        for (let pattern of winningPatterns) {
            const [a, b, c] = pattern;
            if (boxes[a] && boxes[a] === boxes[b] && boxes[b] === boxes[c]) {
                return boxes[a];
            }
        }
        return null;
    }

    return (
      
        <div className='container'>
            <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
            {winner && <h2 className="winner">Winner is {winner.toUpperCase()}</h2>}
            <div className="board">
                {boxes.map((val, index) => (
                    <div key={index} className='boxes' onClick={() => handleBoxClick(index)}>
                        {val === 'x' && <img src={cross_icon} alt='x' />}
                        {val === 'o' && <img src={circle_icon} alt='o' />}
                    </div>
                ))}
            </div>
            <button onClick={() => resetGame()} className='reset'>Reset</button>
        </div>
    )
}

export default TicTacToe
