import React from "react";
import '../stylesheets/Button.css'




function Button(props){
  const isOperator = val =>{
    return isNaN(val) && (val!= '.') && (val!='=');
  };


  return(
    <button 
      className= { `button-container ${isOperator(props.children) ? 'operator' : null }`.trimEnd() }
      onClick = { () => props.clickManager(props.children)}>
        { props.children }
    </button>
  )
};


export default Button;