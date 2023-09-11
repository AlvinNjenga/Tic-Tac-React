import { useEffect, useState } from "react";
import Square from "../Square";
import StatusMessage from "../StatusMessage";
import { BOARD_STATES, SQUARES, checkBoardState } from "./Board.utils";

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(0));
    const [currentPlayer, setCurrentPlayer] = useState(1); // 1 = X, 2 = O
    const [disabled, setDisabled] = useState(false);
    const [message, setMessage] = useState(`Player ${currentPlayer}'s turn`);

    const selectSquare = (position: number) => {
        if (disabled) return;

        const newBoard = [...board];
        newBoard[position] = currentPlayer;
        setBoard(newBoard);
        const nextPlayer = currentPlayer === 1 ? 2 : 1;
        setCurrentPlayer(nextPlayer);
        setMessage(`Player ${nextPlayer}'s turn`);
    }

    const resetBoard = () => {
        setBoard(Array(9).fill(0));
        setCurrentPlayer(1);
        setMessage(`Player ${currentPlayer}'s turn`);
        setDisabled(false);
    }

    useEffect(() => {
        // Check for a winner
        const result = checkBoardState(board);
        if (result === BOARD_STATES.O_WON || result === BOARD_STATES.X_WON) {
            setMessage(`Player ${result} won!`);
            setDisabled(true);
        }

        // Check for a tie
        if (result === BOARD_STATES.TIE) {
            setMessage(`It's a tie!`);
            setDisabled(true);
        }

    }, [board])

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", width: '310px' }}>
                {[...Array(SQUARES)].map((e, i) =>
                    <Square
                        key={i}
                        value={board[i]}
                        onClick={() => selectSquare(i)}
                        disabled={board[i] !== 0}
                    />
                )}
            </div>
            <StatusMessage
                message={message}
                onReset={resetBoard}
            />
        </>
    )
}

export default Board;