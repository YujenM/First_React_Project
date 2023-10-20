import React, { useState } from 'react';
import "./navbar.css"

export default function TextForm(props) {
const [text, setText] = useState("");
const UpperCase = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
};
const LowerCase = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
};
const change = (event) => {
    setText(event.target.value);
};
const numberofvowel = () => {
let countVowels = 0;
for (let count = 0; count < text.length; count++) {
    if (text.charAt(count).match(/[aeiouAEIOU]/)) {
    countVowels++;
    console.log('found a vowel');
    }
}
const changetovowel=document.querySelector('.numberofvowel');
if(text.length===0){
    changetovowel.innerText="Text box is empty";
}else{
    changetovowel.innerText=countVowels +" Vowel letters";
}
};
const Replace = () => {
    try {
        let user = prompt("Enter the text you want to replace").trim();
        let replace = prompt("What you want to replace with").trim();
        if (text.length===0){
            alert("text box is empty");
        }
        else if (!text.includes(user)){
            alert("There is no such word in the text box");
        }else{
            setText(text.replaceAll(user, replace));
        }
    } catch (error) {
        alert("enter the text")
    }
};
const clear=()=>{
    setText("");
}
const removespace=()=>{
    let morespace=text.split(/[  ]+/)
    setText(morespace.join(" "))
}

return (
<div>
    <div className='container mt-5' style={{color:props.template==='dark'?'white':'black'}}>
        <div className='mb-3'>
            <label htmlFor='exampleFormControlTextarea1' className='form-label fw-bold texttitle'>{props.texttitle}</label>
            <textarea className='form-control' value={text} onChange={change} style={{backgroundColor:props.template==='dark'?'#0f172a':'white',color:props.template==='dark'?'white':'black'}} id='exampleFormControlTextarea1' rows='8'></textarea>
        </div>
        <div>
            <button className='btn btn-primary mx-2 my-2' onClick={UpperCase}>UpperCase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={LowerCase}>LowerCase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={numberofvowel}>Number of vowels</button>
            <button className='btn btn-primary mx-2 my-2' onClick={Replace}>Replace</button>
            <button className='btn btn-primary mx-2 my-2' onClick={clear}>Clear Text</button>
            <button className='btn btn-primary mx-2 my-2' onClick={removespace}>Remove Extra Spaces</button>
        </div>
        <h3 className='mt-3'>{props.heading}</h3>
        <p>
            {text.split(' ').filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters
        </p>
        <h3>Preview</h3>
        <p className='previewtext'>{text.length===0?"Enter text in Textbox":text}</p>
        <h3>Number of vowels</h3>
        <p className='numberofvowel'>{"click the Number of vowel button"}</p>
    </div>
</div>
);
}
