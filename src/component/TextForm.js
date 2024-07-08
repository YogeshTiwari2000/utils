// rfc
import React,{useState} from 'react'
// yaha mne pda use state
export default function TextForm(props) {
  // #1 UseState
   const[text,setText]=useState("Enter the Text Here")
   //here this[text,usetext] text is a variable and in order to change the variable 
   //we use a fuction useText as we cant use assignment to change value of variable thats incorrect e.g(text="new Text") 
  
   //  #2
   const handleOnChange=(event)=>{//text area's text change fx
    // console.log("on Change");
    setText(event.target.value);//some value that i am going to write
  }  
// # 3
 const handleOnClick=()=>{//button click fx
    // console.log("upperCase Was Clicked"+text)
    let newText=text.toUpperCase();
    setText(newText)
  }
// # 4
const handleLoClick=()=>{
  let newText=text.toLowerCase();
  setText(newText)
}
const clear=()=>{
  let newText="";
  setText(newText)
}
const download=()=>{
  const element =document.createElement("a")
  const file=new Blob([text],{type:"text/plain"});
  element.href=URL.createObjectURL(file);
  element.download="myFile.txt";
  element.click();
}
const copy=()=>{
  console.log("I am Copy")
  let text =document.getElementById("mybox")
  text.select();
  navigator.clipboard.writeText(text.value)
}
const extraspace=()=>{
  console.log("i am Extra space fx")
  let newText=text.split(/[  ]+/);
  setText(newText.join(" "))
}
// const count=()=>{
//   if(text.length>0){
//     return text.trim().split(/[ ]+/).length;
//   }
//   else{
//     return 0;
//   }
// }


 
  return (
    <>
    <div className="container" >
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} rows="9"  placeholder="Leave a comment here" id="mybox"></textarea>
  <button className="btn btn-primary my-3 mx-3" onClick={handleOnClick}>convert to UpperCase</button>
  <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>convert to LowerCase</button>
  <button className="btn btn-primary my-3 mx-3" onClick={clear}>Clear</button>
  <button className="btn btn-primary my-3 mx-3" onClick={download}>Download</button>
  <button className="btn btn-primary my-3 mx-3" onClick={copy}>Copy</button>
  <button className="btn btn-primary my-3 mx-3" onClick={extraspace}>extraspace</button>
</div>
    </div>
    <div className="container my-3" >
      <h2>Your Text Summary</h2>
      {/* <p>{count()} words and {text.length} characters</p> */}
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
// text area laya #2 button #3 useState #4 events #5 onChange 
//#6 handleOnChange and click fx #7 used useState and used setText() in order to make change and print text written
//#7 settext=event text,event text=text,new text=text.uppercase