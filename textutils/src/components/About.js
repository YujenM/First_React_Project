import React from 'react'
import './navbar.css'
export default function About(props) {
    return (
        <div>
            <div className='container'>
                <div className='title'style={{color:props.template==='dark'?'white':'black'}}>
                    <p>Text Editor</p>
                </div>
                <div className='explain'style={{color:props.template==='dark'?'white':'black'}}>
                <p >
                TextUtils is a versatile app equipped with essential text tools. You can easily switch between uppercase and lowercase, count the number of vowels in a text, perform search and replace operations, and efficiently remove extra spaces. Simplify your text editing with TextUtils today! Moreover, TextUtils has the ability to count the total words and characters in a text, and it will also provide a preview of the text before performing any changes. With these powerful features, TextUtils becomes your go-to app for all things related to text manipulation. 
                </p>
                <p >And that's not all - we have exciting plans for the future! We are actively working on adding even more features to TextUtils, expanding its capabilities, and making it even more powerful. Stay tuned for updates as we continue to enhance the app to cater to all your text manipulation needs. With TextUtils, you can expect a constantly evolving and feature-rich experience that will make your text editing tasks a breeze!</p><br/>
                <p>
                <p className='title'>Features</p>
                Switch between Uppercase and Lowercase: TextUtils allows you to easily convert text to either uppercase or lowercase. This can be handy when you need to change the letter case of a paragraph or a sentence.<br/><br/>
                Count Vowels in a Text: With TextUtils, you can quickly find out how many vowels (a, e, i, o, u) are present in a given text. This feature comes in handy when you want to analyze the vowel distribution in a piece of writing.<br/><br/>
                Search and Replace Operations: TextUtils lets you search for specific words or phrases within your text and replace them with the desired alternative. This makes it easy to make global changes to your content without manually editing each instance.<br/><br/>
                Remove Extra Spaces: Sometimes text may have unnecessary extra spaces that make it look untidy. TextUtils efficiently removes these extra spaces, making your text clean and well-formatted.<br/><br/>
                Count Total Words and Characters: TextUtils can count the total number of words and characters in your text. This feature is useful when you need to keep track of word limits or check the length of a document.

                </p>
                </div>
            </div>
        </div>
    )
}
