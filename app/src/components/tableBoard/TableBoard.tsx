import React from 'react'
import Squares from '../squares/squares'
import classNames from 'classnames/bind';
import style from '../../App.module.scss'
const cx = classNames.bind(style)
interface TableBoardIf {
  squares:number[];
  onClick:(index:number)=>void;
}

const TableBoard = (props: TableBoardIf) => {
  return (
    <div className={cx('board')}>
      {props.squares.map((square,i)=>{
        return <Squares key={i} value={square} onClick={()=>props.onClick(i)}/>
      })}
    </div>
  )
}

export default TableBoard