import React from 'react';
import { CloseIcon, Icon, SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink } from './sidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        //opens/closes sidebar if click on x or around edges of screen, toggle changes state
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" activestyle="true" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="/roadtrip" activestyle="true" onClick={toggle}>
                        Roadtrip
                    </SidebarLink>
                    <SidebarLink to="/resume" activestyle="true" onClick={toggle}>
                        Resume
                    </SidebarLink>
                    <SidebarLink to="/contact" activestyle="true" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;