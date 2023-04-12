import React from "react";
import { BG, ContentSec, Des_Head, HeadSec, L_Content, Line_msg, M_content, Msg_box, Msg_description, Msg_title, R_Content, Sub_Head, Title_Head, Title_box } from "./Purpose_section.element";
import { ReactComponent as MySvg } from './Image.svg';
const Purpose = () => {
    return(
        <>
            <BG>
                <HeadSec>
                    <Title_Head>เป้าหมายขององค์กร</Title_Head>
                    <Sub_Head>ปกป้องคุณอยู่ตลอดเวลารวมถึง ณ เวลานี้</Sub_Head>
                    <Des_Head>มุ่งสู่ความเป็นบริษัทชั้นนำด้านงานบริการ</Des_Head>
                </HeadSec>
                <ContentSec>
                    <L_Content>
                        <Msg_box gap={25}>
                            <Title_box><Line_msg /><Msg_title>หัวข้อ</Msg_title></Title_box>
                            <Msg_description>สร้างความเป็นเอกลักษณ์ของพนักงานรักษาความปลอดภัยด้วยการปลูกฝังแนวคิด ให้เกิดความ “แกล้วกล้า ซื่อสัตย์ มีวินัย ใส่ใจบริการ”</Msg_description>
                        </Msg_box>
                        <Msg_box gap={10}>
                            <Title_box><Line_msg /><Msg_title>หัวข้อ</Msg_title></Title_box>
                            <Msg_description>สร้างความเป็นเอกลักษณ์ของพนักงานรักษาความปลอดภัยด้วยการปลูกฝังแนวคิด ให้เกิดความ “แกล้วกล้า ซื่อสัตย์ มีวินัย ใส่ใจบริการ”</Msg_description>
                        </Msg_box>
                        <Msg_box gap={25}>
                            <Title_box><Line_msg /><Msg_title>หัวข้อ</Msg_title></Title_box>
                            <Msg_description>สร้างความเป็นเอกลักษณ์ของพนักงานรักษาความปลอดภัยด้วยการปลูกฝังแนวคิด ให้เกิดความ “แกล้วกล้า ซื่อสัตย์ มีวินัย ใส่ใจบริการ”</Msg_description>
                        </Msg_box>
                    </L_Content>
                    <M_content>
                        <MySvg></MySvg>
                    </M_content>
                    <R_Content>
                    <Msg_box gap={10}>
                            <Title_box><Line_msg /><Msg_title>หัวข้อ</Msg_title></Title_box>
                            <Msg_description>สร้างความเป็นเอกลักษณ์ของพนักงานรักษาความปลอดภัยด้วยการปลูกฝังแนวคิด ให้เกิดความ “แกล้วกล้า ซื่อสัตย์ มีวินัย ใส่ใจบริการ”</Msg_description>
                        </Msg_box>
                        <Msg_box gap={25}>
                            <Title_box><Line_msg /><Msg_title>หัวข้อ</Msg_title></Title_box>
                            <Msg_description>สร้างความเป็นเอกลักษณ์ของพนักงานรักษาความปลอดภัยด้วยการปลูกฝังแนวคิด ให้เกิดความ “แกล้วกล้า ซื่อสัตย์ มีวินัย ใส่ใจบริการ”</Msg_description>
                        </Msg_box>
                        <Msg_box gap={10}>
                            <Title_box><Line_msg /><Msg_title>หัวข้อ</Msg_title></Title_box>
                            <Msg_description>สร้างความเป็นเอกลักษณ์ของพนักงานรักษาความปลอดภัยด้วยการปลูกฝังแนวคิด ให้เกิดความ “แกล้วกล้า ซื่อสัตย์ มีวินัย ใส่ใจบริการ”</Msg_description>
                        </Msg_box>
                    </R_Content>
                </ContentSec>
            </BG>
        </>
    )
}
export default Purpose;