import React from 'react'


const imgMyimageexample = require('./img2.jpg');
const divStyle = {
  width: '80%',
  height: '400px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover' 
};

const Home = () => {
  return (
    <div className="home-container" style={divStyle}>
  
        <h3 className="animate-charcter"> Welcome to My Recipe Book </h3>

  </div>
  )
}

export default Home