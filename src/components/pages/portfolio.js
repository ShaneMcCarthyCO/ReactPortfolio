import React from "react";
// import NavTabs from "./NavTabs"
import "../../style.css";
import {Container, Row, Col, Jumbotron, Card, CardImg, CardText} from "reactstrap"

function Portfolio() {
  return (
    <div className="background">
    <div>
      <h1>Portfolio Page</h1>
      <div class="wrapper">
        <div class="wrapper1">
        
          <div class="easicuisi">
            
          <a href="https://github.com/ShaneMcCarthyCO/ShaneMcCarthyCOHMWK9">
           
          </a>
          
          <h1 class="header1"> ReadMe Generator</h1>
          <br></br>
          <p class="para1">- This README Generator create a readme by prompting the user to answer several questions and generate a document from those answers. 
          <br></br>
          - The user will be asked for their GitHub username Name of their repo, and upon answering these questions, a README.md file will be generated with the answers given. 
          </p>
        
          <p class="para4">- Repository Link: https://github.com/ShaneMcCarthyCO/ShaneMcCarthyCOHMWK9</p>          
         
          </div>
          

          <div class="allocations">
          <a href="https://shanemccarthyco.github.io/ShaneMcCarthyCOHMWK6/">
            {/* <img className="dayplanner" src="https://i.pinimg.com/originals/f8/be/22/f8be222cc55ac83ce675b5d44a6fb073.png" alt="easicuisi"></img> */}
          </a>
          <h1 class="header2"> Weather Forecast</h1>
          <p class="para1">- The objective was to create a weather forecast that a user could input a city into the search box and see both the current weather as well as five day outlook.  
          <br></br>
          
          
          - An API key was requested for open weather and used to pull information for the forecast. 
          </p>
          <p class="para3">- Languages used: HTML, CSS and Javascript</p>
          
          <p class="para4">- Multiple factors that are pulled include temperature, wind speed, humidity etc. 
         
          <br></br>
        
             </p>
          <p class="para4">- Repository Link: https://github.com/ShaneMcCarthyCO/ShaneMcCarthyCOHMWK6</p>
          
         
          </div>

          <div class="sauchelli">
          <a href="https://dawsontc003.github.io/CO_Park_Rangers/">
            {/* <img className="paul" src="https://cdn.dribbble.com/users/1128142/screenshots/3604965/artboard_1.png" alt="paul"></img> */}
          </a>
          <h1 class="header3"> Park Ranger Project</h1>
          <p class="para1">- This is my first team project during bootcamp. We built a website that allowed a user to explore the four National Parks in CO.  
           <br></br>
           </p>
          <p class="para3">- Languages used: HTML, CSS, Materialize</p>
          
          <p class="para4">- I was responsible for more of the front-end work, including Materialize, content, and research related stuff.
          <br></br>
             </p>
          <p class="para4">- Repository Link: https://github.com/dawsontc003/CO_Park_Rangers</p>
          
         
          
         
          </div>

          
           {}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Portfolio;