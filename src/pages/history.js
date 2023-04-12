import React from "react";
import Navbar from "../components/Global_components/Navbar";
import HistorySec from "../components/History_components/History_section";
import Standard_section from "../components/History_components/Standard_section";
import Quote_section from "../components/History_components/Quote_section";


const History = () => {
    return(
        <>
            <Navbar />
            <HistorySec />
            <Standard_section/>
            <Quote_section/>
        </>
    )
}
export default History;