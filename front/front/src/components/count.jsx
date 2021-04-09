import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// import axios from 'axios';
// import TodoList, {getCount} from './TodoList'

const Title = styled.div`
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-left: 10px;
`;

const MinusButton = styled.button`
display: block;
width: 40px;
padding: 0.8em;
text-align: center;
text-decoration: none;
color: #808080;
border: 2px solid #C0C0C0;
border-radius: 3px;
transition: .4s;
background: #FFF;
float: left;

&:hover {
  background: #808080;
  color: #fff;
}
`;

const Counter = styled.div`
display: block;
font-size: 1.4em;
float: left;
padding: 5px 15px
`;


const PlusButton = styled.button`
// display: block;
display: block;
width: 40px;
padding: 0.8em;
text-align: center;
text-decoration: none;
color: #808080;
border: 2px solid #C0C0C0;
border-radius: 3px;
transition: .4s;
background: #FFF;
float: left;

&:hover {
  background: #808080;
  color: #fff;
}
`;


const Count = (props) => {
  console.log(props);
  const num = props.setCount;
  console.log(num);
  // const [ getCount ] = props;
  
  useEffect(()=> {
    setCount(num)
  },[num]);
  
  const [count, setCount] = useState(num);  

  const minus = () => {
    setCount(count-1)
  }

  const plus = () => {
    setCount(count+1)
  }

  return (
    <div>
      <Title>Progress</Title>
      <MinusButton onClick={minus}>
        -
      </MinusButton>
      <Counter>{count}</Counter>
      <PlusButton onClick={plus}>
        +
      </PlusButton>
    </div>
  )
}

export default Count;