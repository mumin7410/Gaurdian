import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import "../../style/quoteSection.css"
import svg from "./img_quote.svg"

export default function Quote_section() {
  return (
    <>
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                            <div className='quote_title'>
                                <h4>Join 1000+ Happy Premium Users</h4>
                            </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='4'>
                        <div className='quote_content'>
                            <p>Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.</p>
                            <div className='user_content'>
                                <img src={svg}/>
                                <div >
                                    <p className='name_user'>Savannah Miles</p>
                                    <p className='position_user'>brand manager</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className='quote_content'>
                            <p>Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.</p>
                            <div className='user_content'>
                                <img src={svg}/>
                                <div >
                                    <p className='name_user'>Savannah Miles</p>
                                    <p className='position_user'>brand manager</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className='quote_content'>
                            <p>Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.</p>
                            <div className='user_content'>
                                <img src={svg}/>
                                <div >
                                    <p className='name_user'>Savannah Miles</p>
                                    <p className='position_user'>brand manager</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                   
                </Row>
            </Container>
        </section>
    </>
  )
}
