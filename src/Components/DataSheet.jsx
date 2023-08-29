import React, { useState } from 'react';
import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
// import 'react-datasheet/lib/react-datasheet.css';

export default function DataSheet() {
    const [girddata, setGridData] = useState([
        [
          { readOnly: true, value: '' },
          { value: 'A', readOnly: true },
          { value: 'B', readOnly: true },
          { value: 'C', readOnly: true },
          { value: 'D', readOnly: true },
        ],
        [
          { readOnly: true, value: 1 },
          { value: 1 },
          { value: 3 },
          { value: 3 },
          { value: 3 },
        ],
        [
          { readOnly: true, value: 2 },
          { value: 2 },
          { value: 4 },
          { value: 4 },
          { value: 4 },
        ],
        [
          { readOnly: true, value: 3 },
          { value: 1 },
          { value: 3 },
          { value: 3 },
          { value: 3 },
        ],
        [
          { readOnly: true, value: 4 },
          { value: 2 },
          { value: 4 },
          { value: 4 },
          { value: 4 },
        ],
      ])
  return (
    <div className='w-full'>
        <ReactDataSheet
        data={girddata}
        valueRenderer={cell => cell.value}
        onCellsChanged={changes => {
          const grid = girddata.map(row => [...row]);
          changes.forEach(({ cell, row, col, value }) => {
            grid[row][col] = { ...grid[row][col], value };
          });
          setGridData(grid)
        }}
        />
    </div>
  )
}
