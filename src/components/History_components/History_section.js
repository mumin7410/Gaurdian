import React from "react";
import { Col, Row } from "reactstrap";
import "../../style/historySection.css"
const HistorySec = () => {
    return(
        <>
            <section>
                    <Row>
                        <Col lg='6' className="ml-0" >
                            <div className="history_content">
                                <div className="history_subtitle">ประวัติบริษัท KPN</div>
                                <div className="content">
                                    <p>บริษัท รักษาความปลอดภัย เคพีเอ็น แอนด์ เซอร์วิส จำกัด ได้ก่อตั้งขึ้นเมื่อปี พ.ศ.2551 โดยทีมงานมืออาชีพ และมากด้วยประสบการณ์ ด้านงานรักษาความสะอาด ระดับสากล ด้วยความมุ่งมั่นที่จะพัฒนางานด้านการรักษาความสะอาด ให้มีมาตรฐานในระดับสากล</p>
                                </div>
                            </div>
                            <div className="history_img1">
                                <img src="https://media.istockphoto.com/id/921341724/photo/sunrise-in-the-park.jpg?s=612x612&w=0&k=20&c=uoE2MS3oO3LzoF4-wFMAqSSlf41oJnd1TUOOGGhZtlY="/>
                            </div>
                            <div className="history_img2">
                                <img  src="https://media.istockphoto.com/id/921341724/photo/sunrise-in-the-park.jpg?s=612x612&w=0&k=20&c=uoE2MS3oO3LzoF4-wFMAqSSlf41oJnd1TUOOGGhZtlY="/>
                                <img  src="https://media.istockphoto.com/id/921341724/photo/sunrise-in-the-park.jpg?s=612x612&w=0&k=20&c=uoE2MS3oO3LzoF4-wFMAqSSlf41oJnd1TUOOGGhZtlY="/>
                            </div>
                        </Col>
                        <Col  lg='3' >
                            <div className="col-history-img">
                                <div className="history_img3">
                                    <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"/>
                                </div>
                                <div className="history_img4">
                                    <img  src="https://media.istockphoto.com/id/921341724/photo/sunrise-in-the-park.jpg?s=612x612&w=0&k=20&c=uoE2MS3oO3LzoF4-wFMAqSSlf41oJnd1TUOOGGhZtlY="/>
                                    <img className="img-tiger"  src="https://media.istockphoto.com/id/921341724/photo/sunrise-in-the-park.jpg?s=612x612&w=0&k=20&c=uoE2MS3oO3LzoF4-wFMAqSSlf41oJnd1TUOOGGhZtlY="/>
                                </div>
                            </div>
                            <img className="img5" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
                            
                        </Col>
                    </Row>
            </section>

        </>
    )
}
export default HistorySec;