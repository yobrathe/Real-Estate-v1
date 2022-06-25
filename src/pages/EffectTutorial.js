import React, { useEffect } from 'react';
import axios from "axios";

const EffectTutorial = () => {

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      console.log(response.data);
    });
  });

  return (
    <div>EffectTutorial</div>
  )
}

export default EffectTutorial;