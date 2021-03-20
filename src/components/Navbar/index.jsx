import React from "react";
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';


export const Navbar = ({toggle}) => {

    return  (
       <>
       <Nav>
           <NavbarContainer>
              <NavLogo to='/'> Dolla</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='about'>About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='discomver'>Discover</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='services'>Services</NavLinks>
                      </NavItem>
                         <NavItem>
                          <NavLinks to='signup'>Sing Up</NavLinks>
                      </NavItem>
                  </NavMenu>
                   <NavBtn>
                       <NavBtnLink to='/singin'>Sing In</NavBtnLink>
                   </NavBtn>
          </NavbarContainer>
       </Nav>
       </>
    )

}

