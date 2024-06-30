import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    
    {
      title: "FieldX",
      description: " Bridging the gap between farmers and agricultural students, fostering collaboration for sustainable farming practices",
      imgUrl: projImg1,
    },
    {
      title: "Feed Forward",
      description: "Revolutionizing food sustainability by connecting surplus food with those in need through a seamless and efficient app interface",
      imgUrl: projImg2,
    },
    {
      title: "My Personal Portfolio",
      description: "My personal portfolio, built with ReactJS, is a dynamic showcase of my expertise, projects, and passion for innovation",
      imgUrl: projImg3,
    },
  
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore a curated collection of my projects and research papers, each a testament to my dedication, innovation, and pursuit of excellence.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Explore a curated collection of my projects and research papers, each a testament to my dedication, innovation, and pursuit of excellence.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h1 style={{ textAlign: 'left' }}>Papers Researched</h1>
                      <p style={{ textAlign: 'left' }}><li>Precision Farming: A Temperature and Humidity monitoring approach</li></p>
                      <p style={{ textAlign: 'center' }}>Published at the ICIPCN Conference 2024</p>
                      <p style={{ textAlign: 'left' }}><li>Centralized Monitoring System for Street light fault detection and location tracking</li></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}