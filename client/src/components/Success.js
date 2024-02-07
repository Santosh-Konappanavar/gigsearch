import React from 'react'

function Success() {
  return (
    <>
        <div className='success'>
            <div className='sucessimg'>
            <img
                className="background-image"
                src="./Group 2.svg"
                alt="Background"
              />
              <img className="overlay1-image" src="./Frame 1.svg" alt="Overlay" />
            </div>
            <div>
                <h1>Success!</h1>
            </div>
            <div className='sucesspara'>
                <p>
                Congratulations! You have been successfully authenticated
                </p>
            </div>
            <div>
                <button className="sucessbtn">Continue</button>
            </div>
        </div>
    </>
  )
}

export default Success