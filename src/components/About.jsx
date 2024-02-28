import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
<>
<section id='about' class='container' >
<div className='mt-5  mb-5 pt-5 text-center'>
          <h2 id='head'><b style={{color:"tomato"}}>About</b></h2>
          </div>
<Row className=' pt-5 mb-5 pb-5'>
        <Col className=' mt-3 mb-3' xs={12} md={6}>
       
          <div className='pt-5 ms-5  m-3 '>
          <h4 className='text-center'><b>Personal Details</b></h4>
                <p id='p1' className=' mt-3'>
                  Name:Aryalakshmi Manoj <br />
                  DOB:25/03/2004 <br />
                  Languages known:English, Malayalam, Hindi, Tamil <br />
                  Location:Nedumkandam, Idukki <br />
                  Hobbies:Portrait drawing,Listening Music,Cooking,Watching Dramas
                </p> 
            </div>      </Col>
        <Col  className=' p-5 mt-3 mb-3'  xs={12} md={6}>
        <p>  Hello! I'm Aryalakshmi Manoj, a dedicated and motivated Full Stack Developer with a passion for building innovative web applications. I recently completed my Diploma in Computer Engineering and am excited to kickstart my career in the tech industry. My journey into programming began with a curiosity about technology and a drive to learn how to create digital solutions to real-world problems. I am eager to apply my skills and knowledge to contribute meaningfully to exciting projects and to continue learning and growing as a developer.
                </p>
        </Col>
      </Row>
      </section>
</>  
)
}

export default About