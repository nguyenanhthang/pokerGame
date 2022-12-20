import React, { useState } from 'react'
import { CalculateWinner } from '../../Helper';
import TableBoard from '../tableBoard/TableBoard';
import classNames from 'classnames/bind';
import style from '../../App.module.scss'
const cx = classNames.bind(style)
type HeaderProps = {
    children: JSX.Element|JSX.Element[];
};

function Header(props: HeaderProps) {
return <div>{props.children}</div>;
}
const Game = () => {
    const [history, setHistory] = useState([Array(81).fill(null)]);
    console.log(history);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = CalculateWinner(history[stepNumber]);
    const XO = xIsNext ? 'X' : 'O';
    const handleClick = (i:number) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        if (winner || squares[i]) return;
        squares[i] = XO;
        setHistory([...historyPoint, squares])
        setStepNumber(history.length)
        setXisNext(!xIsNext)
    }
    const jumTo = (step:number):void=>{
        setStepNumber(step)
        setXisNext(step % 2 ===0 )
    }
    const renderMove=():any=>{
        history.map((_step,move:number)=>{
            const destination:string = move ? `Go to move${move}`:`Go to start`;
            return(
                <li key={move}>
                    <button onClick={()=>jumTo(move)}>
                        {destination}
                    </button>
                </li>
            )
        })
    }
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <h3>tic tac toe</h3>
            </div>
            <div className={cx('body')}>
                {<TableBoard squares={history[stepNumber]} onClick={handleClick} />}
            </div>
            <div className={cx('info-wrapper')}>
                <Header>
                    <h3>History</h3>
                    {renderMove()}
                </Header>
                <h3>{winner ? 'Winner: '+winner: 'Next Player: '+XO }</h3>
            </div>
        </div>
    )
}

export default Game