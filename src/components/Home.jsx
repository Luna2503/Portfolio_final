import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import resume from '../assets/Aryalakshmi.pdf'
import img1 from '../assets/6.jpg'
import '../styles/style.css'
function Home() {
  return (
<>
<section id='home' class='container' >
<Row className='mt-5 pt-3 mb-5 pb-5'>
        <Col  xs={12} md={6}>
          <div className='p-5  mt-5 mb-5 align-items-center '>
        <h2>I'm <span style={{ fontWeight:'bold',color: 'tomato' }}>Aryalakshmi Manoj</span>
              <br />
              Fullstack developer</h2>
            <br />
            <p className='text-justify'>Hi, Welcome to my portfolio. I'm Aryalakshmi Manoj, a Full Stack Developer passionate about crafting robust and user-centric web applications. With a blend of frontend finesse and backend prowess, I strive to create seamless digital experiences that leave a lasting impression.</p>
            <div className="cv-btn" data-aos='fade-right' data-aos-duration="1600">
              <a href={resume} download='resume'>
                <button id='dnld'>Download Resume</button>
              </a>
            </div>  
            </div>      </Col>
        <Col  className='d-flex align-items-center justify-content-center '  xs={12} md={6}>
            <div className=''>
            <div id='tt'>
              <div id='bk'>
                  <img id='img' src={img1} height={"350px"} width={"auto"} alt="" />
              </div>
            </div>
            </div>
        </Col>
      </Row>
      </section>
</>  )
}

export default Home