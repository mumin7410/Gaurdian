import React from 'react';
import { HeadLogo, Logo, Nav, SubLogo } from './Navbar.element';

const Navbar = () => {
    return(
        <>
            <Nav>
                <Logo>
                    <HeadLogo>WEBSITE</HeadLogo>
                    <SubLogo>GUARDIAN</SubLogo>
                </Logo>
            </Nav>
        </>
    )
}
export default Navbar ;