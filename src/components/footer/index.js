import React from 'react'
import './footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
    return (
        <div className='footer'>
            <div className='icons'>
            <a rel="noopener noreferrer" target="_blank" href='https://twitter.com/_rodozee'><FontAwesomeIcon color='white' size="2x" icon={faTwitter} /></a>
            <a rel="noopener noreferrer" target="_blank" href='https://facebook.com/rodozee'><FontAwesomeIcon color='white' size="2x" icon={faFacebook} /></a>
            <a rel="noopener noreferrer" target="_blank" href='http://instagram.com/rodozee'><FontAwesomeIcon color='white' size="2x" icon={faInstagram} /></a>
            </div>
            <div className='copywright'>
            {`© ${new Date().getFullYear()} Rodozee.  All Rights Reserved.`}
            </div>
        </div>
    )
}


export default Footer