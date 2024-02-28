import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/style.css';

function Contact() {
    return (
        <>
            <section id='contact' class='container' >
                <Row className=' pt-5 mb-5 pb-5'>
                    <div className='mt-3 text-center'>
                        <h2 id='head'><b style={{ color: "tomato" }}>Contact</b></h2>
                    </div>
                   <div className='d-flex justify-content-center '>
                   <Col className=' mt-3 mb-3 d-flex justify-content-center' xs={12} md={6}>
                        <a href="https://wa.me/919961886407" target='_blank'><i class="fa-brands fa-whatsapp fa-2xl p-2"></i></a>
                        <a href="mailto:lchkty@gmail.com"  target='_blank'><i class="fa-solid fa-envelope fa-2xl p-2"></i></a>
                        <a href="https://www.linkedin.com/in/arya-lakshmi-manoj-7446382b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target='_blank'><i class="fa-brands fa-linkedin fa-2xl p-2"></i></a>
                        <a href="https://github.com/Luna2503"  target='_blank'><i class="fa-brands fa-github fa-2xl p-2"></i></a>
                        <a href="https://www.instagram.com/noble_goddess04/" target='_blank'><i class="fa-brands fa-instagram fa-2xl p-2"></i></a>
                    </Col>
                   </div>
                </Row>
            </section>
        </>
    )
}

export default Contact