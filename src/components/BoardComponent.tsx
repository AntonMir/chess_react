import React, { FC, useState, useEffect } from 'react'
import { Cell } from 'models/Cell'
import { Board } from '../models/Board'
import CellComponent from './CellComponent'

interface IBoardProps {
    board: Board
    setBoard: (board: Board) => void
}

const BoardComponent: FC<IBoardProps> = ({board, setBoard}) => {

    // выбранная ячейка либо пустота
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    function click(cell: Cell) {
        if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
        } else {
            setSelectedCell(cell)
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])
    

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div className='board'>
            {board.cells.map((row, index) => 
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent 
                            key={cell.id} 
                            cell={cell}  
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y} 
                            click={click} 
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent