import React from "react";
import styled from "styled-components";

export const BG = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 800px;
    background: #FAF9F7;
    width: 100%;
`
export const HeadSec = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 170px;
    width: 100%;
    padding-top: 60px;
    font-family: 'Anuphan';
`

export const Title_Head = styled.div`
    font-size: 44px;
    color: #25282B;
`
export const Sub_Head = styled.div`
    font-size: 30px;
    color: #A61F23;
`
export const Des_Head = styled.div`
    font-size: 20px;
    color: #A61F23;
`
export const ContentSec = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;
    justify-content: center;
    height: 100%;
    /* padding: 20px 50px 20px 50px; */
`
export const L_Content = styled.div`
    /* background-color: red; */
    width: 33.33%;
    padding: 35px 0 0 0;
`
export const M_content = styled.div`
    /* background-color: green; */
    width: 33.33%;
    display: flex;
`
export const R_Content = styled.div`
    /* background-color: yellow; */
    width: 33.33%;
    padding: 35px 0 0 0px;
`
export const Msg_box = styled.div`
    display: flex;
    flex-direction: column;
    width: 18vw;
    height: 115px;
    margin-left: ${props => `${props.gap}vh`};
    margin-top:35px;
    font-family: 'Anuphan';
    /* background-color:red */
`
export const Title_box = styled.div`
    display: flex;
`
export const Line_msg = styled.div`
    width: 4px;
    border-radius: 15px;
    background-color: #A61F23;
`

export const Msg_title = styled.div`
    font-size: 1.2vw;
    margin-left: 10px;
    color: #25282B;
`
export const Msg_description = styled.div`
    font-size: 1vw;
    margin-left: 14px;
    color: #52575C;
`