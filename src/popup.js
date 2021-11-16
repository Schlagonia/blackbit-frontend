import React from "react";

const Popup = props => {

  const click =(e) => {
    if(e.target.className == 'popup-box') {
      props.handleClose()
    }
  }

  return (
    <div className="popup-box" onClick={click}>
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;