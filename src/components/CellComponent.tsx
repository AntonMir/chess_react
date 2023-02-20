import React from 'react'
import { Cell } from '../models/Cell'

interface ICell {
    cell: Cell
}

const CellComponent: React.FC<ICell> = ({cell}) => {
    return (
        <div className={`cell ${cell.color}`} >
            {cell.figure?.logo && <img className='figure' src={cell.figure.logo} alt=''/>}
        </div>
    )
}

export default CellComponent