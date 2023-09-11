import './App.css'
import Board from './components/Board/Board'

function App() {
  return (
    <div style={{ display: 'flex', gap: '2em', flexDirection: 'column' }}>
      <div style={{ fontSize: "32px", fontWeight: 'bold' }}>
        Tic Tac Toe
      </div>
      <Board />
    </div>
  )
}

export default App
