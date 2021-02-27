import React from "react";
import { Link, Route } from "react-router-dom";
// import Learn from "./Learn";
// import NavTabs from "./NavTabs"

function Contact(props) {
  return (
    <div className="background">
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        Tel: (720) 385-9585
        <br></br>

        Email: shanepmccarthy@icloud.com
        <a href="mailto:shanepmccarthy@icloud.com" class="btn"><button id="emailbtn">Email Me</button></a>
        <br></br>
        
        Github: shanemccarthyco
        <br></br>
      </p>
     
    </div>
    </div>
  );
}

export default Contact;