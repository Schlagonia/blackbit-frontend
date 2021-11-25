import React, { useState, useEffect } from 'react';


function Question(props) {

    const [ display, setDisplay ] = useState(false);

    const handleClick = () => {
        setDisplay(!display);
    }

    return (
        <div 
            className="full-question" 
            id={`${props.question}-q`} 
            style={{ borderBottomStyle: display ? 'inset' : 'none'}} 
            onClick={handleClick}
        >
            <p 
                className="question"    
            >{props.question}?</p>  
            <div className="answer" id={props.question} style={{ display: display ? 'flex' : 'none' }}>
                <div className="question-video"></div>
                <p className="answer-text">{props.answer}</p>
            </div>
        </div>
    )
    
}

export default Question;