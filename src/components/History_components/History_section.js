import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../style/historySection.css"
import  MySvgbee  from './img_bee.svg';
import  MySvgcer  from './img_cer.svg';
import  MySvgchic  from './img_chiken.svg';
import  MySvgbird  from './img_bird.svg';
import MySvgt from "./img_tiger.svg"
import MySvgdog from "./img_dog.svg"
import MySvgsq from "./img_sq.svg"
const HistorySec = () => {
    return(
        <>
            <section>
                <Container fluid>
                    <Row>
                        <Col lg='6' className="p-0" >
                            <div className="history">
                                <h4>ประวัติบริษัท KPN</h4>
                                <p>บริษัท รักษาความปลอดภัย เคพีเอ็น แอนด์ เซอร์วิส จำกัด ได้ก่อตั้งขึ้นเมื่อปี พ.ศ.2551 โดยทีมงานมืออาชีพ และมากด้วยประสบการณ์ ด้านงานรักษาความสะอาด ระดับสากล ด้วยความมุ่งมั่นที่จะพัฒนางานด้านการรักษาความสะอาด ให้มีมาตรฐานในระดับสากล</p>
                            </div>
                            <div className="history_img1">
                                <img src={MySvgbee}/>
                            </div>
                            <div className="history_img2">
                                <img  src={MySvgcer}/>
                                <img src={MySvgchic}/>
                            </div>
                        </Col>
                        <Col lg='6' className="p-0" >
                            <div className="col-history-img">
                                <div className="history_img3">
                                <img src={MySvgbird}/>
                                </div>
                                <div className="history_img4">
                                    <img src={MySvgdog}/>
                                    <img className="img-tiger"  src={MySvgt}/>
                                </div>
                            </div>
                            <img className="history_img5" src={MySvgsq}/>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
export default HistorySec;
               