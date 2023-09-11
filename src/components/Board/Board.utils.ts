export const SQUARES = 9;

export const WINNING_COMBINATIONS = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonal
    [0, 4, 8],
    [2, 4, 6]
]

export const BOARD_STATES = {
    IN_PROGRESS: 0,
    X_WON: 1,
    O_WON: 2,
    TIE: 3
};

export const checkBoardState = (squares: number[]): number => {
    console.log('checkBoardForWinner', squares);
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
        const [a, b, c] = WINNING_COMBINATIONS[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a] === 1 ? BOARD_STATES.X_WON : BOARD_STATES.O_WON;
        }
    }

    if (squares.filter((square) => square === 0).length === 0) {
        return BOARD_STATES.TIE;
    }

    return BOARD_STATES.IN_PROGRESS;
}