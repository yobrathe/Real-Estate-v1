import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

const StateTutorial = () => {

const Container = styled.div`
  width: 80%;
  height: 50vh;
  display: flex;
  margin: 5px 0px 5px 3px;
  border-left: 4px;
`;

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Layote");
    const [surname, setSurName] = useState("Fashions");
    const width = useWindowWidth();

    const increment = () => {
        setCounter(counter + 1);
    };

    // const [inputValue, setInputValue] = useState("Layote");

    // const changeInput = (input) => {
    //     let newValue = input.target.value;
    //     setInputValue(newValue);
    // }

    const changeName = (e) => {
      setName(e.target.value);
  }

    function changeSurName(e) {
      setSurName(e.target.value);
    }

    useEffect(() => {
      document.title = name + ' ' + surname; 
    })

    // const [width, setWidth] = useState(window.innerWidth);
    // useEffect(() =>{
    //   const handleResize = () => setWidth(window.innerWidth)
    //   window.addEventListener('resize', handleResize);
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    // });

  return (
      <div>
        { counter }

          <button onClick={increment}>Increment</button>
          <br /> 
          <br />

          <section label="Name">
            <input
              value={name} 
              placeholder="please enter something..." 
              onChange={changeName} 
            />
          </section>
          
          <section label="Surname">
            <input 
              // placeholder="please enter something..." 
              value={surname}
              onChange={changeSurName} 
            />

            {/* {inputValue} */}
          </section>
          
          <Container>
            {width}
          </Container>
      </div>
  );
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
    useEffect(() =>{
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    });
  return width;
}

export default StateTutorial;