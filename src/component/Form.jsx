import React, { useState } from 'react'

export default function Form(props) {
  const[text,setText]=useState("");
  const handleOnchange=(event)=>{
     let newText=event.target.value
    setText(newText);
  }
 
  const handleOnUpperCase =(event) =>{
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert('success','All words capitalized !')
  }
    const handleOnlowerCase=(event)=>{
      let newText = text.toLowerCase()
      setText(newText);
      props.showAlert('success','All words small !')
    
  }
  
    const handleOnTrim=(event)=>{
      let newText = text.trim();
      setText(newText);
      props.showAlert('success','All text clear')
    }
     const handleOnRemoveSpace=(event)=>{
       let regexpattern=/\s+/g;
      let newText=text.replace(regexpattern," ");
      setText(newText);
     }


    const handleOnCleartext=(event)=>{
      setText("");
    }
  const handleonFirstLetterCap =()=>{
    let textArr=text.split(" ")
    let temp=""
    for( let i=0; i<textArr.length;i++){
    let cap=textArr[i].charAt(0).toUpperCase()+textArr[i].slice(1)
    temp += cap + " "
  }
  setText(temp.trim())

  }
  return (
    <div className='p-3' style={{backgroundColor:props.mode ==='light'?'white':'black',color:props.mode==='light'? 'black':'white'}}>
      <h1>Enter Your Text here  </h1>
      <textarea  value={text} class="form-control" onChange={handleOnchange} id="exampleFormControlTextarea1" rows="3"></textarea>
      <div class="mt-2">  
  <button onClick={handleOnUpperCase} className="btn btn-primary mx-2">{props.uperCaseBttn}</button>
  <button onClick={handleOnlowerCase} className="btn btn-info mx-2">change to Lowercase</button>
  <button onClick={handleOnTrim} className="btn btn-success mx-2">remove spaces</button>
  <button onClick={handleOnCleartext}className="btn btn-success mx-2">cleartext</button>
  <button onClick={handleOnRemoveSpace} className="btn btn-success mx-2">remove spaces btwn word</button>
  <button onClick={handleonFirstLetterCap} className="btn btn-success mx-2">firstCap</button>

</div>
<div>
  <h2>your text summary</h2>
  <p>{text.split(" ").length - 1} word and {text.length}character</p>
</div>
<h2>Preview Text</h2>
<p>{text}</p>
    </div>
    
  ) 
}
