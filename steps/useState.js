import React, {useState} from "react";

const Content = () => {

    const [name, setName] = useState('Dave')
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const names = ['Bob', 'Dave', 'Amanda']
        const int = Math.floor(Math.random() * 3)
        setName (names[int])
      }

      //click handler
      const handleClick = () => {
        setCount(count + 1)
        setCount(count + 1)
        console.log(count)
      }
      
      const handleClick2 = () => {
        console.log(count)
      }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click It</button>
            <button onClick={handleClick2}>Click It</button>
        </main>
    )
}

export default Content 

//useState

//1. start by defining useState
// const [name, setName] = useState()
// name = getter   setName = setter
 
//2. in useState(this is the default set)