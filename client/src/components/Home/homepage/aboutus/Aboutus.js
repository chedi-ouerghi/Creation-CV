import React, { useEffect, useState } from 'react'
import './about.css'
const Aboutus = () => {
    const [colorIndex, setColorIndex] = useState(0);
  const colors = ['rgb(157 14 14)', 'rgb(40 40 92)', 'rgb(37 96 88)'];
  const text = "I'm Chedi Ouerghi developer full stack js developer full stack js";

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [colorIndex]);

  return (
    <div className='back'>
     <div className='aboutt'>
      <p style={{ color: 'hwb(0deg 0% 100%)' }}>
        <ol className='hello'>Hello,</ol>{' '}
        <strong style={{ color: colors[colorIndex] }}>
          {text}
        </strong>
        <ol>
          <strong style={{ color: colors[0] }}></strong>
        </ol>
        In a nutshell, think of a website as being made up of different layers: a backend layer and a frontend layer. These layers, when grouped together, make up a technology stack. JavaScript was initially only a language for the web client (browser). But then, Node.js brought about the ability to use JavaScript on the web server, giving us full stack JavaScript development.
      </p>
    </div>
    </div>
  )
}

export default Aboutus