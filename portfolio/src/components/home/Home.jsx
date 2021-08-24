import "./home.scss";

import me from "../../assets/images/shivani.jpg";
import 'bootstrap/dist/css/bootstrap.css';



export default function Home() {
    return (
      <div className="home" id="home" >
        <section className="mt-0">
          <div className="align-self-end ">
            <h1 className="name1" >Hey there !</h1> 
            <h1 className="name">I'm Shivani Nazare. </h1> <br/>
            <img className="rounded mx-auto d-block" src={me} height="200" width="200" alt="Oopss!!" /> 
            <h5 className="text-centernt-weight-bold " style={{color: "white"}}>  Software Engineer | Web Developer  </h5><br/>
          </div>
    
        </section>
      </div>
    )
}
