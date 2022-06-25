import React, { useRef, useState }from 'react';

const RefTutorial = () => {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState("Layote");

    const onClick = () => {
        inputRef.current.value = "";
    };

    const onChange = (input) => {
        let newValue = input.target.value;
        setInputValue(newValue);
    }

  return (
    <div>
        <h1>{inputValue}</h1>
        {/* <input type="text" placeholder='Ex...' ref={inputRef} />
        <button onClick={onClick}>Change Name</button>

        <br />
        <br /> */}
        <input type="text" placeholder='Ex...' onChange={onChange} ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;