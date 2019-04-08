import React from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component {

    render() {
        let footerStyle = {
            padding: 5,
            backgroundColor: '#343a40'
        };
        let socialIconStyle = {
            marginLeft: 5,
            marginRight: 5
        };

        return (
            <div>
                <footer style={footerStyle} >
                    <SocialIcon style={socialIconStyle} url="https://www.linkedin.com/in/ra%C3%BAl-del-r%C3%ADo-catal%C3%A1n-46a567a9/"/>
                    <SocialIcon style={socialIconStyle} network="twitter"/>
                    <SocialIcon style={socialIconStyle} network="facebook"/>
                    <SocialIcon style={socialIconStyle} network="youtube"/>
                    <SocialIcon style={socialIconStyle} url="https://github.com/rauldel"/>
                </footer>
            </div>
        );
    };
}

export default Footer;
