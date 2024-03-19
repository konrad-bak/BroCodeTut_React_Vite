import React, {useState} from 'react'

function TempComp() {
  
  const [number, setNumber] = useState(0)

  const incrementNamber = () => {
    setNumber(number + 1)
  }

  return (
    <>
    <h2>TempComp below:</h2>

    <p>Number: {number}</p>
    <button onClick={incrementNamber}> ZWINKSZ NAMBER</button>
    </>
  )
}

export default TempComp;