import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav';
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import background from "../assets/img/color-sharp2.png"
import ProjectCard from "./ProjectCard";

function Projects(){
    const projects =[
        {
            title: "Weather App",
            description:"Design and Development",
            imgUrl:projImg1
        },
        {
            title: "Dictionary App",
            description:"Design and Development",
            imgUrl:projImg2
        },
        {
            title: "Netflix Clone",
            description:"Design and Development",
            imgUrl:projImg3
        }
    ]
    return(
       <section className="project" id="project">
        <Container>
            <Row>
                <Col size={12}>
                    <h2>Projects</h2>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat.
                    </p>
                    <Tab.Container className="project-tabs" defaultActiveKey = "first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                               {
                                    projects.map((project,index)=>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                               }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={background} alt="background"/>
       </section>
    )

}

export default Projects;