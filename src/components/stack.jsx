import React from 'react';
import CSS from "../resources/css.png";
import HTML from "../resources/html.png";
import JS from "../resources/js.png";
import REACT from "../resources/react.png";
import REDUX from "../resources/redux.png";
import TAILWIND from "../resources/tailwind.webp";



const Stack = () => {
  return (
    <div name="stack" className='bg-slate-700 text-slate-200 w-full h-screen'>
      <div>
        <div><p>Experience</p>
        <p>This is my regular stack</p>
        </div>

        <div><img src={JS} alt='js logo'></img></div>
      </div>
    </div>
  )
}

export default Stack