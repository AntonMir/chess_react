import React, { useState, useEffect } from 'react';
import './App.css'
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';

function App() {

    const [board, setBoard] = useState(new Board())

    // при перересовке игра начнеся по новой
    useEffect(() => {
        restart()
    }, [])   


    /**
     * Инициализация новой игры
     * Рестарт формирования доски
     */
    function restart() {
        const newBoard = new Board()
        newBoard.initCells()
        newBoard.addFigure()
        setBoard(newBoard)
    }


    return (
        <div className='app'>
            <BoardComponent board={board} setBoard={setBoard}/>
        </div>
    );
}

export default App;
