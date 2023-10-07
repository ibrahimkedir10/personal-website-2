import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import SportsIcon from "@material-ui/icons/Sports";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import "../styles/experence.css";
import profilePicture from "../assets//gradpic2.jpg";
import BGS from "../assets//BGS.jpeg";
import CrossCountry from "../assets//CROSS COUNTRY.jpg";
import experience from "../assets//experence.png";
function Experience() {
  return (
  <div className="area">
    <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
      <VerticalTimeline lineColor="#3e497a">
        <div>
        <h1 className="header2">Experience</h1>
        <img src={experience} alt="Ibrahim Kedir" className="img" />
        </div>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="09-2022 - 06-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Enterprise Applications 
          </h3>
          <p> Software Engineer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="06-2022 - 08-2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Giorgian Bay Outfitter
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>

          <p> Software Engineer</p>
        </VerticalTimelineElement>
        <div>
        <h1 className="header2">Education</h1>
        </div>
        <img src={profilePicture} alt="Ibrahim Kedir" className="img" />
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="09-2022 - 06-2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          
          <h3 className="vertical-timeline-element-title">
            La Salle University 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Philadelphia, PA
          </h4>
          <p>M.B.A: Business systems & Analytics </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          La Salle University 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Philadelphia, PA
          </h4>
          <p>
          B.A Computer Science
          <br/>
          Minor(s): Information Technology, Marketing, Business Administration
          </p>
        </VerticalTimelineElement>
        <div>
        <h1 className="header2">Achivements</h1>
        </div>
        <img src={BGS} alt="Ibrahim Kedir" className="img" />
        <VerticalTimelineElement
       
          className="vertical-timeline-element--education"
          date="2023 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<EmojiEventsIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
          Member 
          </h3>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">
          Beta Gamma Sigma International Business Honor Society
          </h4>
          <p>
          Proudly inducted into Beta Gamma Sigma Honor Society, I embrace a commitment to excellence, leadership, and ethical business practices. This recognition marks a milestone in my academic journey, connecting me with a community of high-achieving individuals shaping the future of business and leadership
          <br/>
          
          </p>
        </VerticalTimelineElement>
       
        
        <a href="https://goexplorers.com/sports/mens-track-and-field/roster/ibrahim-kedir/11664" target="_blank" rel="noopener noreferrer">
           <img src={CrossCountry} alt="Ibrahim Kedir" className="img" />  
          </a>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<DirectionsRunIcon />}
        >
          
          <h3 className="vertical-timeline-element-title">
          La Salle University Track and Field | Cross Country 
          </h3>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">
          Athlete | Division 1 NCAA Competitor
          </h4>
          <br/>
          <p>
          Reflecting on my athletic journey at La Salle University, where I competed in Track and Field and Cross Country, I am proud to have contributed to the team's success in securing multiple A-10 titles. Competing at the NCAA level was a challenging yet rewarding experience that enhanced my skills, resilience, and team spirit. As a dedicated athlete, I cherish the memories of pushing my limits, achieving personal milestones, and being part of a team that consistently pursued excellence. These experiences have not only shaped my athletic career but have also instilled in me a profound appreciation for teamwork, discipline, and the pursuit of excellence both on and off the track.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>
  );
}

export default Experience;
