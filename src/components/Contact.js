import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

function Contact(){
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        phone: "",
        emailAddress: "",
        message: ""
    }

    const [formDetails, setFormDetails]= useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    function onFormUpdate(category,value){
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    function handleSubmit(){
        
    }

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md = {6}>
                        <img src={contactImg} alt="Contact"/>
                    </Col>
                    <Col md = {6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={12} className="px-1">
                                    <input type="text" 
                                    value={formDetails.firstName} 
                                    placeholder="First Name" 
                                    onChange={(e)=>onFormUpdate('firstName',e.target.value)}
                                    />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <input type="text" 
                                    value={formDetails.firstName} 
                                    placeholder="Last Name" 
                                    onChange={(e)=>onFormUpdate('lastName',e.target.value)}
                                    />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <input type="text" 
                                    value={formDetails.firstName} 
                                    placeholder="Phone Number" 
                                    onChange={(e)=>onFormUpdate('phone',e.target.value)}
                                    />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <input type="text" 
                                    value={formDetails.firstName} 
                                    placeholder="Email Address" 
                                    onChange={(e)=>onFormUpdate('emailAddress',e.target.value)}
                                    />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea
                                     rows="6" 
                                     value={formDetails.message} 
                                     placeholder="Message" 
                                     onChange={(e) => onFormUpdate('message', e.target.value)}
                                     />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ?  "danger" : "success"}>{status.message}x</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );

}

export default Contact;