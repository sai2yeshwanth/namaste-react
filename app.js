import React from 'react';
import  ReactDOM  from 'react-dom/client'
//jsx => Babel transpiles it to React.createElement => ReactElement-js Object => HTMLElement(render)
const jsxHeading = (
    <h1 className='head' >
        Namaste React Using JSX
    </h1>
)
console.log(jsxHeading);//object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);