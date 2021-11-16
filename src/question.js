import React, { Component } from 'react';


class Question extends Component {

    constructor(props){
        super(props)
        this.state ={
            display: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({ display: !this.state.display })
    }

    render() {
    
    return (
        <div 
            className="full-question" 
            id={`${this.props.question}-q`} 
            style={{ borderBottomStyle: this.state.display ? 'inset' : 'none'}} 
            onClick={this.handleClick}
        >
            <p 
                className="question"    
            >{this.props.question}?</p>  
            <div className="answer" id={this.props.question} style={{ display: this.state.display ? 'flex' : 'none' }}>
                <div className="question-video"></div>
                <p className="answer-text">{this.props.answer}</p>
            </div>
        </div>
    )
    }
}

export default Question;