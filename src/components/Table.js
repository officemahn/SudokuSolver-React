import React from 'react'
import '../styles/Table.css'

const Table = ({data, column}) => {
  return (
    <>
      <h1>Hall of Fame</h1>
      <table className="scoreboard">
        <thead>
          <tr>
            {column.map((item, index) =><TableHeadItem item={item}/>)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index)=> <TableRow item={item} column={column}/>)}
        </tbody>
      </table>
    </>
  )
}

const TableHeadItem = ({item}) => <th>{item.heading}</th>
const TableRow =({item, column}) => (
  <tr>
    {column.map((columnItem, index)=>{
      return <td>{item[`${columnItem.value}`]}</td>
    })}
  </tr>
)

export default Table