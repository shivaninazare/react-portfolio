import "./aboutme.scss";

/* import video from "../../assets/Videos/butter.mp4"; */
import 'bootstrap/dist/css/bootstrap.css';


export default function Aboutme() {
    return (
        <div className="aboutme" id="aboutme" >
            <div className="con">
                <div className="about">
                    <h3 className="about me " style={{color: "DeepSkyBlue"},{fontSize: "200%"}}><strong>About Me</strong></h3>               
                    <p className="about me">I am currently pursuing my Bachelors degree in the field of
                    Computer Science Engineering in KLE Technological University, Hubli, Karnataka, India. <br></br><br></br>                    I'm Seeking a challenging position in the field of Software engineering to hone and
                    utilize my skills for organizational growth. Passionate about learning technologies 
                    with a basic understanding of various programming languages.<br></br><br></br>
                    Feel free to check my resume or contact me for more details !
                     {/*such as C, C++, Java, Python, HTML,
                    CSS, Javascript, Typescript, React, Node, Angular. */}
                    </p>
                </div>
                
               {/*         <div className="video">
                    <video src={video}  controls style={{marginTop:30}}>
                    </video>
                    </div>   
             */}

            </div>
        </div>
    )
}
