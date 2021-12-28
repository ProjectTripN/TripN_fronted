import React, { useState } from 'react';
import styled from 'styled-components';

const Main = () => {
  const [color, setColor] = useState('red');

  const onClick = () => {
    color === 'red' ? setColor('yellow') : setColor('red');
  };

  return (
    <Button color={color} onClick={onClick}>
      button
    </Button>
  );
};

export default Main;

const Button = styled.button`
  background-color: ${props => props.color};
`;