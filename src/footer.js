import React, { useState, useEffect } from 'react';
import './blackbit-tiles-black.css';

export default function Footer(props) {

    return(
        <div class="footer">
            <h2 className="footer-title">BlackBit Capital</h2>
            <p className='footer-faq' onClick={() => props.faqClick() }>FAQ</p>
            <p className="footer-contact-us">Contact Us</p>
            <p className="twitter"><a href='https://twitter.com/BlackbitCapital' target="_blank">Twitter</a></p>
            <p className="discod">Discord</p>
        </div>  
    )
}