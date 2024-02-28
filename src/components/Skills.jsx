import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/5.jpg'

function Skills() {
  return (
<>
<section id='skills' class='container' >
<div className='pb-3'>
<div className='mt-5 mb-5 pt-5 text-center'>
          <h2 id='head'><b style={{color:"tomato"}}>Skills</b></h2>
          </div>
<Row className=' pt-5 mb-5 pb-5'>
        <Col className=' mt-3 mb-3 d-flex align-items-center justify-content-center ' xs={12} md={4}>
       
          <div className='pt-5 ms-5  m-3 '>
          <img src={img1} height={"195px"} width={"195px"} alt="" />

            </div>      </Col>
        <Col  className=' mt-3 mb-3'  xs={12} md={8}>

        <div class="skill-container">
                <div class="progress-bar">
                  <div class="bar-container">
                    <h5>HTML</h5>
                    <span>95%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar html-bar"></div>
                  </div>
                  <div class="bar-container">
                    <h5>CSS</h5>
                    <span>95%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar css-bar"></div>
                  </div>
                  <div class="bar-container">
                    <h5>JAVASCRIPT</h5>
                    <span>80%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar js-bar"></div>
                  </div>
                  <div class="bar-container">
                    <h5>REACT</h5>
                    <span>70%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar rt-bar"></div>
                  </div>

                  <div class="bar-container">
                    <h5>PYTHON</h5>
                    <span>80%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar py-bar"></div>
                  </div>
                  
                </div>
              </div>
        </Col>
      </Row>
      </div>

      </section>
</>
  )
}

export default Skills