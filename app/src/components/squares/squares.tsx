import React from "react";

interface SquareIf {
  key:number;
  value: number,
  onClick: ()=> void
}

const Squares = (props: SquareIf) => {
  const style:string = props.value ? `square ${props.value}` :`square`
  return (
    <button key={props.key} className={style} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Squares