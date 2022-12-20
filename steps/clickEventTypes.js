import React from "react";

const Content = () => {

    const handleNameChange = () => {
        const names = ['Bob', 'Dave', 'Amanda']
        const int = Math.floor(Math.random() * 3)
        return names[int]
      }

      //click handler
      const handleClick = () => {
        console.log('You clicked it')
      }
      
      const handleClick2 = (name) => {
        console.log(`${name} was clicked `)
      }

      const handleClick3 = (event) => {
        console.log(event.target.innerText)
      }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click It</button>
            <button onClick={() => {handleClick2('Dave')}}>Click It</button>
            <button onClick={(event) => {handleClick3(event)}}>Click It</button>
        </main>
    )
}

export default Content 


//click event types 

//button 1 gives tells us we clicked it in the console
//button 2 tells us dave was clicked and takes in name as an argument 
//button 3 gives us the event target plus innerText
//Hello when you double click on hello it says you clicked it