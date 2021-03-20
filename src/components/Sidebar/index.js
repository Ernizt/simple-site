import React from 'react';
import styled from 'styled-components';
import {FaTimes as CloseIcon} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom';

const Sidebar = ({isOpen, toggle}) => {

    return (
        <Wrapper>
            <SidebarContainer isOpen = {isOpen} onClick={toggle}>
                <div className="Icon" onClick={toggle}>
                    <CloseIcon/>
                </div>
                <div className='SidebarWrapper'>
                    <ul className='SidebarMenu'>
                        <SidebarLiks to='about' onClick={toggle}>
                            About
                        </SidebarLiks>
                        <SidebarLiks to='discomver' onClick={toggle}>
                            Discomver
                        </SidebarLiks>
                        <SidebarLiks to='services' onClick={toggle}>
                            Services
                        </SidebarLiks>
                        <SidebarLiks
                            to='signup' onClick={toggle}>
                            Sign Up
                        </SidebarLiks>
                            </ul>
                    <div className='SideBtnWrap'>
                         <div className='SideBtnWrap'>
                             <SideBarRoute className = 'SideBarRoute' to='/signin'>Sign In</SideBarRoute>
                         </div>
                    </div>
                </div>
            </SidebarContainer>
        </Wrapper>

    )
}
export  default Sidebar;

const Wrapper = styled.article`
   /*.SidebarContainer {
   position: fixed;
   z-index: 999;
   width: 100%;
   height: 100%;
   background: #0d0d0d;
   display: grid;
   align-items: center;
   top: 0;
   left:0; 
   opacity: ${({isOpen}) => (isOpen ? '100%' :'0')}; 
   top: ${({isOpen}) => (isOpen ? '0':'-100%')};   
   }
   svg {
   color:white;
   } */
    
   .Icon {
       position: absolute;
       top:1.2rem;
       right: 1.5rem;
       background: transparent;
       font-size: 2rem;
       cursor: pointer;
       outline:none;
     }
     .SidebarWrapper  {
           color:white;
          }
         
          .SideBtnWrap {
            display: flex;
            justify-content: center;
            }
         
          }
          .SidebarMenu {
          display: grid;;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(6, 80px);
          text-align: center;
          
          @media screen and (max-width:480px ){
          grid-template-rows: repeat(6, 60px);
          }
          
          
   `;
 const SidebarContainer = styled.aside`
   position: fixed;
   z-index: 999;
   width: 100%;
   height: 100%;
   background: #0d0d0d;
   display: grid;
   align-items: center;
   top: 0;
   left:0; 
   opacity: ${({isOpen}) => (isOpen ? '100%' :'0')}; 
   top: ${({isOpen}) => (isOpen ? '0':'-100%')};   
   }
   svg {
   color:white;
`;
const SidebarLiks = styled(LinkR)`
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          text-decoration: none;
          list-style: none;
          transition: 0.2s ease-in-out;
          text-decoration: none;
          color:#fff;
          cursor: pointer;          
          &:hover {
          color:#01bf71;
          transition: 0.2s ease-in-out;
`;
const SideBarRoute = styled(LinkR)`
      border-radius: 50px;
      background: #1fbf71;
      white-space: nowrap;
      padding: 16px 64px;
      color:#010606;
      font-size: 16px;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
       &:hover {
       transition: all 0.2s ease-in-out;
       background: #fff;
       color:#010606;
              }
       
`
