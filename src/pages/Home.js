import React from 'react'
import useFetch from "./useFetch.js";

const Home = () => {

  const {data, loading, error} = useFetch("https://api.chucknorris.io/jokes/random")

  if(loading){
    return <h1>Loading...</h1>
  }

  if(error) {
    console.log(error)
  }

  return (
    <div>
      <h1>
        {data?.value} 
      </h1>
    </div>
  )
}

export default Home