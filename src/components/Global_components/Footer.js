import React from "react";
import { BG, Contact_Sec, Contact_Top, CopyRight, Information_Sec, Input_M_Text, Input_S_Text, Name_Email_Part, Parent_submitButton, Submit_button, Tel_Comment, Inf } from "./Footer.element";
import { BiSearchAlt } from 'react-icons/bi';
const Footer = () => {
    return(
        <>
            <BG>
                <Information_Sec>
                    <Inf>บริษัท รักษาความปลอดภัยเคพีเอ็น แอนด์ เซอร์วิส จำกัด</Inf>
                    <Inf>เลขที่ 91/1,92,2 หมู่ที่ 3</Inf>
                    <Inf>ตำบลไทรน้อย อำเภอไทรน้อย นนทบุรี 11150</Inf>
                    <Inf>02-503-4499 ต่อ 401-409</Inf>
                    <Inf style={{marginTop:'20px'}}><BiSearchAlt style={{marginRight:'10px'}}/>Facebook</Inf>
                    <Inf><BiSearchAlt style={{marginRight:'10px'}}/>Line</Inf>
                </Information_Sec>
                <Contact_Sec>
                    <Name_Email_Part>
                        <Input_S_Text placeholder="Name"/>
                        <Input_S_Text placeholder="Email"/>
                    </Name_Email_Part>
                    <Tel_Comment>
                        <Contact_Top>CONTACT US</Contact_Top>
                        <Input_S_Text placeholder="Telephone"/>
                        <Input_M_Text placeholder="Comment"/>
                        <Parent_submitButton><Submit_button>Submit</Submit_button></Parent_submitButton>
                    </Tel_Comment>
                </Contact_Sec>

            </BG>
            <CopyRight>Copyright © 2022 | kpn.newdice.co</CopyRight>
        </>
    )
}
export default Footer;