import React from "react";
// import NavTabs from "./NavTabs"
import {Link} from "react-router-dom"
// import {CardImg, Container} from "reactstrap"

function Home() {
  return (
    <div className="background">
    <div>
      <h1 className="myname">Shane McCarthy</h1>
      <br></br>
      <h2 className="fullstack">Investment Professional | Full Stack Web Developer Student</h2>
    <br></br>
      <h3 className="denver"> Highlands Ranch, Colorado</h3>
      <br></br>
      <br></br>
      <br></br>
      <div>
      <h4 className="tutor">Portfolio Manager & Student</h4>
     <div className="icons">
     <a href="https://www.linkedin.com/in/shane-mccarthy-cfa-b49779183/"><i class="fab fa-linkedin fa-4x linkedin" ></i></a>
      <br></br>
      <a href="https://github.com/ShaneMcCarthyCO"><i class="fab fa-github fa-4x github"></i></a>
      <a href="mailto:shanepmccarthy@icloud.com" class="btn"><button id="emailbtnhome">Email Me</button></a>
      <br></br>
      </div>
      </div>
    <br></br>
<br></br>    
    <br></br>

    </div>

</div>

  );
}

export default Home;
