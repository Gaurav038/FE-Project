import React from 'react'
import { useSelector } from 'react-redux';

function Page3() {

  const {name, age} = useSelector((state) => state.input);

  return (
    <h1>
        Your name {name} aged {age} has been added to student system. You may now exit.
    </h1>
  )
}

export default Page3