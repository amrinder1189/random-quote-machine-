import React from 'react';



const Button= ({buttonname , clickhandle})=> (
   
       <button id="new-quote" onClick={clickhandle}>{buttonname}</button>

);




export default Button;