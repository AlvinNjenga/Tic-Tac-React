const STATES = {
    EMPTY: 0,
    X: 1,
    O: 2
}

interface SquareProps {
    value: number,
    onClick: () => void,
    disabled: boolean
}

const Square = ({ value, onClick, disabled }: SquareProps): JSX.Element => {

    const handleOnClick = () => {
        if (disabled)
            return;

        onClick();
    }

    return (
        <div
            onClick={handleOnClick}
            style={{ display: 'flex', width: '100px', height: '100px', border: '1px solid black', backgroundColor: "white", placeItems: 'center' }}
        >
            <div style={{ color: 'black', width: '100%', fontSize: '32px', fontWeight: 'bold' }}>
                {value === STATES.EMPTY ? "" : value === STATES.X ? "X" : "O"}
            </div>
        </div>
    )
}

export default Square;