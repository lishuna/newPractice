import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// function HelloWord() {
//     return <h1>hello word</h1>
// }
// ReactDOM.render(<HelloWord />, document.getElementById('root'));

// function tick() {
//     const str = 'abcdefg';
//     const element = (
//         <div>
//             <h1>Hello, world!{str}</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);
function clickHandle(index){
    alert(index);
}
function Collection(props) {
    console.log(props)
    const numbers = props.numbers;
    const elem = numbers.map(val => <li id={val} onClick={(e)=>clickHandle(val,e)} onMouseEnter={clickHandle.bind(this,val)}>{val}</li>);
    return <ul>{elem}</ul>;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const data = {
    numbers: arr
}
ReactDOM.render(<Collection {...data}/>, document.getElementById('root'));


