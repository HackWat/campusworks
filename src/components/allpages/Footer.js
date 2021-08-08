import React from 'react'
import './styles.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer w-95">
            <span className="copyright">&copy;College</span>
            <div className="social-media">
                <a className="instagram">
                    <InstagramIcon />
                </a>
                <a className="twitter">
                    <TwitterIcon />
                </a>
                <a className="facebook">
                    <FacebookIcon />
                </a>
            </div>
        </div>
    )
}

export default Footer
