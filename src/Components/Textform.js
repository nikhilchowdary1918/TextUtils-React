import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
  const handleUppercaseClick = () =>{
    //console.log("Uppercase was clicked")
    let newtext= text.toUpperCase();
    setText(newtext)
  }
  const handleLowercaseClick = () =>{
    
    let newtext= text.toLowerCase();
    setText(newtext)
  }

  const handleFirstUppercaseClick =() =>{
    let newtext= text.charAt(0).toUpperCase() + text.slice(1);
    setText(newtext)
  }

  const handleFirstLowercaseClick =() =>{
    let newtext= text.charAt(0).toLowerCase() + text.slice(1);
    setText(newtext)
  }

  const handleOnChange = (event) =>{
    //console.log("Onchange")
    setText(event.target.value)

  }
  const [text, setText] = useState("")

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="btn btn-secondary mx-1" onClick={handleUppercaseClick}>Convert to Uppercase</button>
      <button className="btn btn-secondary mx-1" onClick={handleLowercaseClick}>Convert to Lowercase</button>
      <button className="btn btn-secondary mx-1" onClick={handleFirstUppercaseClick}>Convert first letter to Uppercase</button>
      <button className="btn btn-secondary mx-1" onClick={handleFirstLowercaseClick}>Convert first letter to Lowercase</button>
      
    </div>

    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1> Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} letters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2> Preview </h2>
      <p>{text}</p>
    </div>
</>
  )
}
Textform.propTypes= {heading: PropTypes.string}