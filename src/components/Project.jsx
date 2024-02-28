import React from 'react'
import Card from 'react-bootstrap/Card';
import mediaplayer from '../assets/media.jpg'
import foodcircle from '../assets/foodcircle.jpg'
import ekart from '../assets/ekart.jpg'
import counter from '../assets/counter.jpg'
import interest from '../assets/simple.png'
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Project() {
  return (
    <>
    <section id='projects' class='container' >
        <div className='mt-2'>
<div className='mt-5 pt-5 text-center'>
    
          <h2 id='head'><b style={{color:"tomato"}}>Projects</b></h2>
          </div>
       
<Row className='d-flex pt-5 mb-5 pb-5'>
   
        <Col className='d-flex justify-content-center  mt-3 mb-3' xs={12} md={6} lg={4}>
        <Card id='c1' className=' m-3 p-3 pb-2' style={{ height:'300px', width: '12rem' }}>
              <Card.Img height={'180px'} width={'100%'} variant="top" src={mediaplayer} />
              <Card.Body>
                <Card.Title className='text-center'><b>Media Player</b></Card.Title>
                <Card.Text className='d-flex align-items-center flex-column'>
               <a href='https://github.com/Luna2503/Mediaplayerfrontend.git'> <Button style={{width:'100px',border:'none',backgroundColor:'tomato'}} className='m-2'><i class=" bg-transparent text-light fa-brands fa-github"></i> Github</Button></a> 
               
               <a href="https://mediaplayerfrontend.vercel.app/"><Button style={{width:'100px',border:'none',backgroundColor:'tomato'}} className='m-2'><i class="bg-transparent text-light fa-solid fa-link"></i> Visit</Button></a>
                </Card.Text>
              </Card.Body>
              </Card>
              </Col>
              
              <Col className='d-flex justify-content-center  mt-3 mb-3' xs={12} md={6} lg={4}>

          
               <Card id='c1' className='m-3 p-3 pb-2' style={{  height:'300px', width: '12rem' }}>
              <Card.Img height={'180px'} width={'100%'} variant="top" src={foodcircle} />
              <Card.Body>
              <Card.Title className='text-center'><b>Restaurant</b></Card.Title>
                <Card.Text className='d-flex align-items-center flex-column'>
               <a href='https://github.com/Luna2503/Restaurant-redux.git'> <Button style={{width:'100px',border:'none',backgroundColor:'tomato'}} className='m-2'><i class=" bg-transparent text-light fa-brands fa-github"></i> Github</Button></a> 
               
               <a href="https://restaurant-redux-teal.vercel.app/"><Button style={{width:'100px',border:'none',backgroundColor:'tomato'}} className='m-2'><i class="bg-transparent text-light fa-solid fa-link"></i> Visit</Button></a>
                </Card.Text>              </Card.Body>
            </Card> 
            </Col>
              <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
                 <Card id='c1' className='m-3 p-3 pb-2' style={{  height:'300px', width: '12rem' }}>
              <Card.Img height={'180px'} width={'100%'} variant="top" src={ekart} />
              <Card.Body>
              <Card.Title className='text-center'><b>E-Kart</b></Card.Title>
                <Card.Text className='d-flex align-items-center flex-column'>
               <a href='https://github.com/Luna2503/ekart-redux.git'> <Button style={{width:'100px',border:'none',backgroundColor:'tomato'}} className='m-2'><i class=" bg-transparent text-light fa-brands fa-github"></i> Github</Button></a> 
               
               <a href="https://ekart-redux-amber.vercel.app/"><Button style={{width:'100px',border:'none',backgroundColor:'tomato'}} className='m-2'><i class="bg-transparent text-light fa-solid fa-link"></i> Visit</Button></a>
                </Card.Text>  
                              </Card.Body>
            </Card> 
            </Col>
              <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>

      <Card id='c1' className='m-3 p-3 pb-2' style={{ height:'300px', width: '12rem' }}>
              <Card.Img height={'180px'} width={'100%'} variant="top" src={counter} />
              <Card.Body>
              <Card.Title className='text-center'><b>Counter</b></Card.Title>
                <Card.Text className='d-flex align-items-center flex-column'>
               <a href='https://github.com/Luna2503/counter1.git'> <Button style={{width:'100px',border:'none',backgroundColor:'tomato'}} className='m-2'><i class=" bg-transparent text-light fa-brands fa-github"></i> Github</Button></a> 
               
               <a href="https://counter1-1i5m.vercel.app/"><Button style={{width:'100px',border:'none',backgroundColor:'tomato'}} className='m-2'><i class="bg-transparent text-light fa-solid fa-link"></i> Visit</Button></a>
                </Card.Text>                </Card.Body>
            </Card>
            </Col>
            <Col className='d-flex justify-content-center  mt-3 mb-3' xs={12} md={6} lg={4}>
                   <Card id='c1' className='m-3 p-3 pb-2' style={{ height:'300px', width: '12rem' }}>
              <Card.Img height={'180px'} width={'100%'} variant="top" src={interest} />
              <Card.Body>
              <Card.Title className='text-center'><b>Simple Interest</b></Card.Title>
                <Card.Text className='d-flex align-items-center flex-column'>
               <a href='https://github.com/Luna2503/Simple-Interest.git'> <Button style={{width:'100px',border:'none',backgroundColor:'tomato'}} className='m-2'><i class=" bg-transparent text-light fa-brands fa-github"></i> Github</Button></a> 
               
               <a href="https://simple-interest-omega.vercel.app/"><Button style={{width:'100px',border:'none',backgroundColor:'tomato'}} className='m-2'><i class="bg-transparent text-light fa-solid fa-link"></i> Visit</Button></a>
                </Card.Text>                </Card.Body>
            </Card>
        
            
            </Col>

      
      </Row>
      </div>
     
      </section>
    </>
  )
}

export default Project