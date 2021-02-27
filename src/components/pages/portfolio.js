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
            <img className="portfolioimg" src="" alt="easicuisi"></img>
          </a>
          
          <h1 class="header1"> ReadMe Generator</h1>
          <br></br>
          <p class="para1">- README Generator This README Generator create a readme by prompting the user to answer several questions and generate a document from those answers. 
          <br></br>
          - The user will be asked for their GitHub username Name of their repo, and upon answering these questions, a README.md file will be generated with the answers given. 
          </p>
        
          <p class="para4">- Repository Link: https://github.com/ShaneMcCarthyCO/ShaneMcCarthyCOHMWK9</p>          
         
          </div>
          

          <div class="allocations">
          <a href="https://shanemccarthyco.github.io/ShaneMcCarthyCOHMWK6/">
            <img className="dayplanner" src="https://i.pinimg.com/originals/f8/be/22/f8be222cc55ac83ce675b5d44a6fb073.png" alt="easicuisi"></img>
          </a>
          <h1 class="header2"> AlLocations</h1>
          <p class="para1">- Project designed for users to be able to store information for an upcoming trip in one  
          <br></br>
          centralized place
          <br></br>
          - On landing page, user will be able to target upcoming trip, or future trips being planned
          </p>
          <p class="para3">- Languages used: Node, Express, Handebars, Sequelize, Materialize</p>
          
          <p class="para4">- I was responsible for the back end work on this project. Once the front end was wired up,
          <br></br>
          I was tasked with wiring up the server to be able to store user data that could be called 
          <br></br>
          when the user requests it.
             </p>
          <p class="para4">- Repository Link: https://github.com/ShaneMcCarthyCO/ShaneMcCarthyCOHMWK6</p>
          
         
          </div>

          <div class="sauchelli">
          <a href="https://dawsontc003.github.io/CO_Park_Rangers/">
            <img className="paul" src="https://cdn.dribbble.com/users/1128142/screenshots/3604965/artboard_1.png" alt="paul"></img>
          </a>
          <h1 class="header3"> Park Ranger Project</h1>
          <p class="para1">- This is a developer portfolio that I designed for a client who is training to become a data scientist.  
           <br></br>
          - Application includes links to his resume and LinkedIn profile, as well as contact information for employers.
          <br></br>
          - Links to project repositories on GitHub are also included on the portfolio page
          </p>
          <p class="para3">- Languages used: HTML, CSS, Bootstrap</p>
          
          <p class="para4">- I was responsible for the entire project from concept to completion. I met with Paul a few times 
          <br></br>
          to gain an understanding of what he was looking for  and then designed it from there.
          <br></br>
             </p>
          <p class="para4">- Repository Link: https://github.com/benabbott85/Paul-Sauchelli</p>
          
         
          
         
          </div>

          
           {/* <a href= "https://lit-shelf-33451.herokuapp.com/"><img className="notetaker" src="https://jeffshore.com/wp-content/uploads/2016/07/Taking-Notes.jpg" alt="notetaker"></img></a>
           <a href="https://github.com/benabbott85/B-Abbott-HW-8"><img className="developerprofile" src="https://cdn-images-1.medium.com/max/1600/1*137RurhEOkjDyUGWQJhvAg.png" alt="developerprofile"></img></a> */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Portfolio;