import React from 'react';
import Typing from 'react-typing-animation';

const AnimatedTypingComponent = () => (
    <Typing>
      <span>This span will get typed.</span>
    </Typing>
  );

function Greeting() {
  return (
    <>
    <AnimatedTypingComponent></AnimatedTypingComponent>


    </>
  );
}

export default Greeting;