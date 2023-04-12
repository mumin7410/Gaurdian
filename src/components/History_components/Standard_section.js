import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../style/standart.css"
import svg from "./img_standard.svg"

export default function Standard_section() {
  return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className='standard_title'>
                                <h4>มาตราฐานของเรา</h4>
                                <p>our standard</p>
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col lg='3'>
                            <div className='standard_content'>
                                <img  src={svg}/>
                                <h3>ทำไมจึงต้องนำมาใช้</h3>
                                <p>มีหลักฐานที่เป็นข้อเท็จจริงยืนยันมานานแล้ว ว่าเนื้อหาที่อ่านรู้เรื่องนั้นจะไปกวนสมาธิของคนอ่านให้เขวไปจากส่วนที้เป็น</p>
                            </div>
                        </Col>
                        <Col lg='3'>
                            <div className='standard_content'>
                                <img  src={svg}/>
                                <h3>ทำไมจึงต้องนำมาใช้</h3>
                                <p>มีหลักฐานที่เป็นข้อเท็จจริงยืนยันมานานแล้ว ว่าเนื้อหาที่อ่านรู้เรื่องนั้นจะไปกวนสมาธิของคนอ่านให้เขวไปจากส่วนที้เป็น</p>
                            </div>
                        </Col>
                        <Col lg='3'>
                            <div className='standard_content'>
                                <img  src={svg}/>
                                <h3>ทำไมจึงต้องนำมาใช้</h3>
                                <p>มีหลักฐานที่เป็นข้อเท็จจริงยืนยันมานานแล้ว ว่าเนื้อหาที่อ่านรู้เรื่องนั้นจะไปกวนสมาธิของคนอ่านให้เขวไปจากส่วนที้เป็น</p>
                            </div>
                        </Col>
                        <Col lg='3'>
                            <div className='standard_content'>
                                <img  src={svg}/>
                                <h3>ทำไมจึงต้องนำมาใช้</h3>
                                <p>มีหลักฐานที่เป็นข้อเท็จจริงยืนยันมานานแล้ว ว่าเนื้อหาที่อ่านรู้เรื่องนั้นจะไปกวนสมาธิของคนอ่านให้เขวไปจากส่วนที้เป็น</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
  )
}
