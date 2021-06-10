import { useState } from "react";
import "./contact.scss";
import shake from "../../assets/images/shake.png";
import linkedin from "../../assets/images/linkedin.png";
import mobile from "../../assets/images/mobile.png";
import twitter  from "../../assets/images/twitter.png";
import github from "../../assets/logos/github-logo.svg";
import insta from "../../assets/logos/insta.png";
import PropTypes from "prop-types"; 
export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact" >


      <div className="right">

      <div className="row">
            <div className="column">
            <a href="https://twitter.com/nazare-shivani" >
                    <img className="logo" src={twitter} width="25" height="30"  alt="Twitter" />
                </a>
            </div>
             <div className="column">
             <a href="https://www.linkedin.com/in/shivani-nazare-103630172" >
                    <img className="logo" src={linkedin} width="25" height="30"  alt="Linkedin" />
                </a>
            </div>
            <div className="column" id="s1" >
                <a href="instagram.com/shivani.nazare" >
                    <img className="logo" src={mobile} width="25" height="30" alt="Mobile" />
                </a>
            </div>
             <div className="column">
             <a href="https://github.com/shivaninazare" >
                    <img className="logo" src={github} width="25" height="30"  alt="Github" />
                </a>
             </div>
             <div className="column">
             <a href="instagram.com/shivani.nazare" >
                    <img className="logo" src={insta} width="25" height="30"  alt="Instagram" />
                </a>
             </div>
         </div>



        <h2>Contact.</h2>

        <form action="mailto:shivaninazare@gmail.com" method="POST" enctype="multipart/form-data" name="EmailForm">        
        Name:
             <input type="text" size="19" name="ContactName"/>
               Message:<textarea name="ContactComment" rows="6" cols="20"></textarea>
              <input type="submit" value="Submit"/>
              {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
