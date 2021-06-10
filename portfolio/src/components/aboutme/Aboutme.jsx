import "./aboutme.scss";

import video from "../../assets/Videos/butter.mp4";
import 'bootstrap/dist/css/bootstrap.css';


export default function Aboutme() {
    return (
        <div className="aboutme" id="aboutme" >
            <div className="con">
                <div className="about">
                    <h3 className="text-left font-weight-bold " style={{color: "#CF6679"}}>About Me</h3>               
                    <p className="text-left text-white ">I am currently pursuing my Bachelors degree in
                    Computer Science Engineering in KLE Technological University, Hubli, Karnataka, India.
                    I'm Seeking a challenging position in the field of software engineering to hone and utilize my skills 
                    for organizational growth. I have a basic understanding of programming languages such as C, C++,
                    Java, Python, HTML, CSS, Javascript, Typescript.
                    </p>
                </div>
                
                <div className="video">
                    <video src={video}  controls style={{marginTop:30}}>
                    </video>
                </div>
            </div>
        </div>
    )
}
