const StatusMessage = ({ message, onReset }: { message: string, onReset: () => void }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ display: 'flex', placeItems: 'center', textTransform: 'uppercase', fontWeight: 'bold' }}>
                {message}
            </div>
            <div>
                <button onClick={onReset}>RESET</button>
            </div>
        </div>
    )
}

export default StatusMessage;